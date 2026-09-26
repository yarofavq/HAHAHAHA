class VisualEngine {
  constructor() {
    this.noiseCanvas = document.getElementById('noise-canvas');
    this.noiseCtx = this.noiseCanvas ? this.noiseCanvas.getContext('2d') : null;
    this.cctvCanvas = document.getElementById('cctv-canvas');
    this.cctvCtx = this.cctvCanvas ? this.cctvCanvas.getContext('2d') : null;
    this.monitorCanvas = document.getElementById('monitor-canvas');
    this.monitorCtx = this.monitorCanvas ? this.monitorCanvas.getContext('2d') : null;
    this.screamerCanvas = document.getElementById('screamer-canvas');
    this.screamerCtx = this.screamerCanvas ? this.screamerCanvas.getContext('2d') : null;
    this.finalCamCanvas = document.getElementById('final-cam-canvas');
    this.finalCamCtx = this.finalCamCanvas ? this.finalCamCanvas.getContext('2d') : null;

    this.anomalyOverlay = document.getElementById('anomaly-overlay');
    this.whisperText = document.getElementById('whisper-text');
    this.collapseScreen = document.getElementById('collapse-screen');
    this.freezeScreen = document.getElementById('freeze-screen');
    this.monitorModal = document.getElementById('cam-monitor-modal');
    this.expungedScreamer = document.getElementById('expunged-screamer');
    this.finalAwakenScreen = document.getElementById('final-awaken-screen');
    this.finalCamRoom = document.getElementById('final-cam-room');
    this.signalLostScreen = document.getElementById('signal-lost-screen');
    
    this.currentCam = 'CAM-07';
    this.zoomLevel = 1.0;
    this.panX = 0;
    this.panY = 0;
    this.isDragging = false;
    this.dragStart = { x: 0, y: 0 };

    // Дискретные фазы положения сущности на CAM-07 (меняются при возврате)
    // 0: далеко, 1: ближе, 2: в углу, 3: исчезла, 4: в упор
    this.entityStage = 0;
    this.cam00Visits = 0;
    this.cam00HasEntity = false;
    this.cctvCorrupted = false;

    this.initCanvases();
    this.initMonitorEvents();
    this.animate();
  }

  initCanvases() {
    if (this.noiseCanvas) { this.noiseCanvas.width = 300; this.noiseCanvas.height = 200; }
    if (this.cctvCanvas) { this.cctvCanvas.width = 300; this.cctvCanvas.height = 180; }
    if (this.monitorCanvas) { this.monitorCanvas.width = 640; this.monitorCanvas.height = 400; }
    if (this.screamerCanvas) { this.screamerCanvas.width = 640; this.screamerCanvas.height = 480; }
    if (this.finalCamCanvas) { this.finalCamCanvas.width = 640; this.finalCamCanvas.height = 400; }
  }

  initMonitorEvents() {
    const vp = document.getElementById('monitor-viewport');
    if (!vp) return;

    const startDrag = (x, y) => {
      this.isDragging = true;
      this.dragStart = { x: x - this.panX, y: y - this.panY };
    };
    const moveDrag = (x, y) => {
      if (!this.isDragging) return;
      this.panX = Math.max(-120, Math.min(120, x - this.dragStart.x));
      this.panY = Math.max(-80, Math.min(80, y - this.dragStart.y));
      this.updateZoomTransform();
    };
    const endDrag = () => { this.isDragging = false; };

    vp.addEventListener('mousedown', (e) => startDrag(e.clientX, e.clientY));
    window.addEventListener('mousemove', (e) => moveDrag(e.clientX, e.clientY));
    window.addEventListener('mouseup', endDrag);

    vp.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) startDrag(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1) moveDrag(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    window.addEventListener('touchend', endDrag);
  }

  setZoom(lvl) {
    this.zoomLevel = lvl;
    if (lvl === 1.0) { this.panX = 0; this.panY = 0; }
    this.updateZoomTransform();
    document.querySelectorAll('.zoom-btn').forEach(b => b.classList.remove('active'));
    const b = document.getElementById(`btn-zoom-${lvl}x`);
    if (b) b.classList.add('active');
    if (window.audioEngine) window.audioEngine.playCamRelayClick();
  }

  updateZoomTransform() {
    if (this.monitorCanvas) {
      this.monitorCanvas.style.transform = `scale(${this.zoomLevel}) translate(${this.panX / this.zoomLevel}px, ${this.panY / this.zoomLevel}px)`;
    }
  }

  openMonitor(camId) {
    if (this.monitorModal) {
      this.monitorModal.style.display = 'flex';
      this.switchCamera(camId || this.currentCam);
      if (window.audioEngine) window.audioEngine.playCamRelayClick();
    }
  }

  closeMonitor() {
    if (this.monitorModal) {
      this.monitorModal.style.display = 'none';
      if (window.audioEngine) window.audioEngine.playCamRelayClick();
    }
  }

  switchCamera(camId) {
    const prevCam = this.currentCam;
    this.currentCam = camId;

    // Если возвращаемся на CAM-07 — фаза существа меняется незаметно
    if (camId === 'CAM-07' && prevCam !== 'CAM-07') {
      this.entityStage = (this.entityStage + 1) % 5;
      if (window.storyEngine) {
        window.storyEngine.saveData.entityStage = this.entityStage;
        window.storyEngine.writeSave(window.storyEngine.saveData);
      }
    }

    document.querySelectorAll('.cam-toggle-btn, .monitor-cam-btn').forEach(b => b.classList.remove('active'));
    const b1 = document.getElementById(`btn-${camId.toLowerCase()}`);
    const b2 = document.getElementById(`mon-btn-${camId.toLowerCase()}`);
    if (b1) b1.classList.add('active');
    if (b2) b2.classList.add('active');

    const miniLabel = document.getElementById('cctv-feed-label');
    const monTitle = document.getElementById('monitor-cam-name');
    const monLoc = document.getElementById('monitor-cam-loc');

    let loc = 'SECTOR-07B SUB-LEVEL';
    if (camId === 'CAM-00') loc = 'RESTRICTED CONTAINMENT [VAULT]';
    else if (camId === 'CAM-01') loc = 'OBSERVATION ROOM [CH-01]';
    else if (camId === 'CAM-02') loc = 'CORRIDOR DELTA [EMPTY]';
    else if (camId === 'CAM-03') loc = 'TERMINAL BANK ARCHIVE';
    else if (camId === 'CAM-07') loc = 'HOLDING CELL 07';
    else if (camId === 'CAM-08') loc = 'SUB-LEVEL 9 BIO-FIBER CORE';

    if (miniLabel) miniLabel.textContent = `● REC (${camId})`;
    if (monTitle) monTitle.textContent = `${camId} // ACTIVE MONITOR`;
    if (monLoc) monLoc.textContent = loc;

    if (window.audioEngine) {
      window.audioEngine.playCamRelayClick();
      window.audioEngine.playStaticBurst(0.18, 0.2);
    }

    if (camId === 'CAM-00') {
      this.handleCamera00Entrance();
    }
  }

  handleCamera00Entrance() {
    this.cam00Visits++;
    if (window.storyEngine) {
      window.storyEngine.saveData.cam00Visits = this.cam00Visits;
      window.storyEngine.writeSave(window.storyEngine.saveData);
    }

    if (this.cam00Visits === 1) {
      // Первый вход: 2.2 сек пустой бокс -> сбой развертки -> CAMERA SIGNAL LOST
      setTimeout(() => {
        if (this.currentCam === 'CAM-00') {
          const monTitle = document.getElementById('monitor-cam-name');
          if (monTitle) monTitle.textContent = 'CAMERA SIGNAL LOST';
          if (window.audioEngine) window.audioEngine.playMetallicScreech();
          this.cctvCorrupted = true;
          setTimeout(() => {
            this.cctvCorrupted = false;
            this.switchCamera('CAM-07');
            if (window.storyEngine) window.storyEngine.logToTerminal('ERR: CAM-00 SIGNAL LOST BY REMOTE CONTROLLER.');
          }, 1800);
        }
      }, 2200);
    } else {
      // Второй и последующие: Нечто появилось
      this.cam00HasEntity = true;
    }
  }

  getTimestampForCam(camId) {
    const now = new Date();
    const s = String(now.getSeconds()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const h = String(now.getHours()).padStart(2, '0');

    if (camId === 'CAM-01') return `1989-11-04 ${h}:${m}:${s}`;
    if (camId === 'CAM-02') return `1994-04-12 ${h}:${m}:${s}`;
    if (camId === 'CAM-03') return `1995-09-03 ${h}:${m}:${s}`;
    if (camId === 'CAM-07') {
      // Редкий глитч таймкода
      if (Math.random() < 0.05) return '2099-??-?? 99:99:99';
      return `1994-09-03 ${h}:${m}:${s}`;
    }
    if (camId === 'CAM-08') return `2031-08-19 ${h}:${m}:${s}`;
    if (camId === 'CAM-00') return 'ERROR-TIME // VOID';
    return `1994-00-00 ${h}:${m}:${s}`;
  }

  renderNoise() {
    if (!this.noiseCtx) return;
    const w = this.noiseCanvas.width; const h = this.noiseCanvas.height;
    const imgData = this.noiseCtx.createImageData(w, h);
    const buffer32 = new Uint32Array(imgData.data.buffer);
    for (let i = 0; i < buffer32.length; i++) {
      if (Math.random() < 0.14) {
        const val = Math.floor(Math.random() * 255);
        buffer32[i] = (255 << 24) | (val << 16) | (val << 8) | val;
      }
    }
    this.noiseCtx.putImageData(imgData, 0, 0);
  }

  drawCameraScene(ctx, w, h) {
    ctx.fillStyle = '#060608';
    ctx.fillRect(0, 0, w, h);

    const now = Date.now();

    if (this.currentCam === 'CAM-07') {
      // Изолятор
      ctx.strokeStyle = '#14141c'; ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(35, 20); ctx.lineTo(w - 35, 20);
      ctx.lineTo(w - 70, h - 25); ctx.lineTo(70, h - 25);
      ctx.closePath(); ctx.stroke();

      // Отрисовка фазы существа:
      // 0: далеко, 1: ближе, 2: в углу, 3: исчезла, 4: в упор
      if (this.entityStage !== 3) {
        ctx.save();
        let scale = 1.0;
        let cx = w / 2;
        let cy = h / 2 + 15;

        if (this.entityStage === 0) {
          scale = 0.8; cy = h / 2 - 5;
        } else if (this.entityStage === 1) {
          scale = 1.3; cy = h / 2 + 10;
        } else if (this.entityStage === 2) {
          scale = 1.2; cx = w / 4; cy = h / 2;
        } else if (this.entityStage === 4) {
          scale = 3.2; cy = h / 2 + 40;
        }

        ctx.fillStyle = 'rgba(2, 2, 2, 0.94)';
        ctx.beginPath();
        ctx.ellipse(cx, cy + 30 * scale, 24 * scale, 45 * scale, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(cx, cy - 14 * scale, 13 * scale, 22 * scale, 0, 0, Math.PI * 2);
        ctx.fill();

        // Глаза
        ctx.fillStyle = 'rgba(240, 20, 20, 0.85)';
        ctx.fillRect(cx - 5 * scale, cy - 15 * scale, 2 * scale, 2 * scale);
        ctx.fillRect(cx + 4 * scale, cy - 15 * scale, 2 * scale, 2 * scale);
        ctx.restore();
      }
    } else if (this.currentCam === 'CAM-00') {
      // Секретный саркофаг
      ctx.strokeStyle = '#1b1b22';
      ctx.strokeRect(30, 30, w - 60, h - 60);
      ctx.beginPath();
      ctx.moveTo(30, 30); ctx.lineTo(w/2, h/2 - 20); ctx.lineTo(w - 30, 30);
      ctx.stroke();

      if (this.cam00HasEntity) {
        ctx.save();
        ctx.fillStyle = '#010101';
        ctx.beginPath();
        ctx.ellipse(w/2, h/2 + 20, 42, 75, 0, 0, Math.PI * 2);
        ctx.ellipse(w/2, h/2 - 45, 24, 34, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ff2222';
        for (let e = -3; e <= 3; e++) {
          ctx.fillRect(w/2 + e * 8, h/2 - 45 + Math.sin(e)*4, 2, 2);
        }
        ctx.restore();
      }
    } else if (this.currentCam === 'CAM-01') {
      // Комната со стулом Character 1
      ctx.strokeStyle = '#181825';
      ctx.strokeRect(20, 20, w - 40, h - 40);
      ctx.strokeRect(w/2 - 12, h/2, 24, 25);
      ctx.strokeRect(w/2 - 12, h/2 - 25, 24, 25);
      if (Math.sin(now / 3000) > -0.6) {
        ctx.fillStyle = 'rgba(15, 15, 20, 0.85)';
        ctx.beginPath();
        ctx.ellipse(w/2, h/2 + 10, 14, 28, 0, 0, Math.PI * 2);
        ctx.ellipse(w/2, h/2 - 18, 9, 12, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (this.currentCam === 'CAM-02') {
      ctx.strokeStyle = '#101016';
      for (let c = 0; c < 5; c++) {
        const off = c * 30;
        ctx.strokeRect(off, off, w - off*2, h - off*2);
      }
    } else if (this.currentCam === 'CAM-03') {
      ctx.strokeStyle = '#0e1216';
      for (let s = 30; s < w - 40; s += 50) {
        ctx.strokeRect(s, 25, 35, h - 50);
        if (Math.random() < 0.2) {
          ctx.fillStyle = '#103020';
          ctx.fillRect(s + 5, 40 + (now/100 % 80), 4, 4);
        }
      }
    } else if (this.currentCam === 'CAM-08') {
      ctx.strokeStyle = '#220808'; ctx.lineWidth = 2;
      const t = now / 600;
      for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.moveTo(i * 60, 0);
        ctx.bezierCurveTo(i * 60 + Math.sin(t + i)*20, h/2, i * 50 - Math.cos(t)*15, h/2 + 30, i * 65, h);
        ctx.stroke();
      }
      ctx.fillStyle = '#0f0202';
      ctx.beginPath();
      ctx.arc(w/2, h/2, 35 + Math.sin(t*2)*4, 0, Math.PI * 2);
      ctx.fill();
    }

    // Отрисовка уникального timestamp прямо на видеокадре
    ctx.fillStyle = 'rgba(200, 200, 200, 0.7)';
    ctx.font = '11px monospace';
    ctx.fillText(this.getTimestampForCam(this.currentCam), 12, h - 12);

    if (this.cctvCorrupted) {
      for (let i = 0; i < 8; i++) {
        ctx.fillStyle = Math.random() < 0.5 ? '#150000' : '#000000';
        ctx.fillRect(0, Math.random() * h, w, Math.random() * 20);
      }
    }

    const scanlineY = (now / 16) % h;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.035)';
    ctx.fillRect(0, scanlineY, w, 2);
  }

  renderCCTV() {
    if (this.cctvCtx) {
      this.drawCameraScene(this.cctvCtx, this.cctvCanvas.width, this.cctvCanvas.height);
    }
    if (this.monitorCtx && this.monitorModal && this.monitorModal.style.display !== 'none') {
      this.drawCameraScene(this.monitorCtx, this.monitorCanvas.width, this.monitorCanvas.height);
    }
  }

  async triggerExpungedScreamer(callback) {
    if (!this.expungedScreamer || !this.screamerCanvas) return;
    const ctx = this.screamerCtx;
    const w = this.screamerCanvas.width;
    const h = this.screamerCanvas.height;

    if (window.audioEngine) {
      await window.audioEngine.silenceBeforeStorm(1400);
    }

    this.expungedScreamer.style.display = 'flex';
    ctx.fillStyle = '#020202';
    ctx.fillRect(0, 0, w, h);

    if (window.audioEngine) window.audioEngine.playBreathing();

    await new Promise(r => setTimeout(r, 900));

    if (window.audioEngine) {
      window.audioEngine.playBreachImpact();
    }
    if (navigator.vibrate) {
      try { navigator.vibrate([150, 60, 300, 100, 450]); } catch(e){}
    }

    let startTime = performance.now();
    const animateReach = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1.0, elapsed / 850);

      ctx.fillStyle = 'rgba(2, 2, 2, 0.35)';
      ctx.fillRect(0, 0, w, h);

      ctx.save();
      const scale = 0.5 + progress * progress * 3.8;
      const cx = w/2 + (Math.random()-0.5) * 15;
      const cy = h/2 + (Math.random()-0.5) * 15;

      ctx.translate(cx, cy);
      ctx.scale(scale, scale);

      ctx.strokeStyle = '#ff1111';
      ctx.lineWidth = 2 / scale;
      ctx.fillStyle = '#050202';

      ctx.beginPath();
      ctx.moveTo(-30, 120); ctx.lineTo(-15, 20); ctx.lineTo(15, 20); ctx.lineTo(30, 120);
      ctx.fill(); ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(0, 0, 22, 26, 0, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();

      for (let f = -2; f <= 2; f++) {
        ctx.beginPath();
        ctx.moveTo(f * 8, -10);
        ctx.lineTo(f * 14, -55 - Math.abs(f)*6);
        ctx.lineTo(f * 16, -70 - Math.abs(f)*8);
        ctx.lineWidth = 4 / scale;
        ctx.stroke();
      }

      if (progress > 0.7) {
        ctx.fillStyle = 'rgba(40, 5, 5, 0.85)';
        ctx.beginPath();
        ctx.ellipse(0, -90, 40, 55, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(-15, -95, 8, 4);
        ctx.fillRect(8, -95, 8, 4);
      }
      ctx.restore();

      if (progress < 1.0) {
        requestAnimationFrame(animateReach);
      } else {
        document.body.classList.add('glitch-flash');
        setTimeout(() => {
          this.expungedScreamer.style.display = 'none';
          document.body.classList.remove('glitch-flash');
          if (callback) callback();
        }, 250);
      }
    };

    requestAnimationFrame(animateReach);
  }

  // Кинематографичный финал Главы: AWAKEN -> Пустая комната -> Отражение силуэта -> SIGNAL LOST
  triggerFinalAwakenSequence(callback) {
    if (!this.finalAwakenScreen || !this.finalCamRoom || !this.signalLostScreen) return;

    if (window.audioEngine) {
      window.audioEngine.silenceBeforeStorm(4000);
    }

    // 1. Экран текста SUBJECT 00 AWAKE
    this.finalAwakenScreen.style.display = 'flex';

    setTimeout(() => {
      this.finalAwakenScreen.style.display = 'none';
      // 2. Показываем пустую комнату на весь экран
      this.finalCamRoom.style.display = 'block';
      const ctx = this.finalCamCtx;
      const w = this.finalCamCanvas.width;
      const h = this.finalCamCanvas.height;

      const renderEmpty = (showReflection = false) => {
        ctx.fillStyle = '#050507';
        ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = '#181822';
        ctx.strokeRect(30, 20, w - 60, h - 40);

        // Если наступил момент отражения в стекле (силуэт за спиной игрока)
        if (showReflection) {
          ctx.save();
          ctx.fillStyle = 'rgba(25, 5, 5, 0.55)';
          ctx.beginPath();
          ctx.ellipse(w/2, h/2 - 10, 35, 60, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = 'rgba(200, 20, 20, 0.7)';
          ctx.fillRect(w/2 - 10, h/2 - 20, 4, 3);
          ctx.fillRect(w/2 + 6, h/2 - 20, 4, 3);
          ctx.restore();
        }
      };

      renderEmpty(false);

      // Игрок смотрит на пустую комнату 3.2 секунды
      setTimeout(() => {
        // На 0.6 сек появляется силуэт в отражении стекла
        renderEmpty(true);
        if (window.audioEngine) window.audioEngine.playWhisperVoice();
        if (navigator.vibrate) try { navigator.vibrate(200); } catch(e){}

        setTimeout(() => {
          // 3. Резкий обрыв: SIGNAL LOST
          this.finalCamRoom.style.display = 'none';
          this.signalLostScreen.style.display = 'flex';
          if (window.audioEngine) {
            window.audioEngine.playMetallicScreech();
            window.audioEngine.playStaticBurst(2.0, 0.4);
          }

          setTimeout(() => {
            this.signalLostScreen.style.display = 'none';
            if (callback) callback();
          }, 3500);
        }, 600);
      }, 3200);
    }, 4500);
  }

  async triggerAnomaly(text = 'I SEE YOU', duration = 400) {
    if (!this.anomalyOverlay) return;
    if (window.audioEngine) {
      await window.audioEngine.silenceBeforeStorm(350);
      window.audioEngine.playStinger();
      if (Math.random() < 0.45) window.audioEngine.playWhisperVoice();
    }
    if (navigator.vibrate) {
      try { navigator.vibrate([100, 50, 200]); } catch(e){}
    }
    this.whisperText.textContent = text;
    this.anomalyOverlay.style.opacity = '1';
    document.body.classList.add('glitch-flash');
    setTimeout(() => {
      this.anomalyOverlay.style.opacity = '0';
      document.body.classList.remove('glitch-flash');
    }, duration);
  }

  animate() {
    this.renderNoise();
    this.renderCCTV();
    requestAnimationFrame(() => this.animate());
  }
}

window.visualEngine = new VisualEngine();
