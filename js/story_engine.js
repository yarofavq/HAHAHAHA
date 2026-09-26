const SAVE_KEY = 'ARCHIVE_07_SAVE';

const ARCHIVE_DOCS = {
  'doc-01': {
    title: 'LOG-1994-04-12 // INGESTION',
    meta: 'SEC_LEVEL: 1 | ARCHIVIST: D. VORONIN',
    text: `Первичный контакт с объектом 07 зафиксирован в подвальном архиве сектора 'Гамма'.
Физическая форма субъекта нестабильна. При попытке замера температуры датчики выходят из строя.

Субъект не проявляет явной агрессии, но мониторы видеоконтроля начинают мерцать в радиусе 15 метров.

[ЗАМЕТКА]: Сотрудникам запрещено смотреть непосредственно на оптические датчики камеры наблюдения больше 30 секунд подряд.`
  },
  'doc-02': {
    title: 'LOG-1994-09-03 // ADAPTATION',
    meta: 'SEC_LEVEL: 2 | AUTHORIZED PERSONNEL ONLY',
    text: `Оно учится нашему способу каталогизации данных.
Вчера в терминалах базы появилось 400 страниц случайного текста. 
При детальном анализе это оказался транскрипт мыслей дежурного инженера за последние 3 часа.

Инженер помещен в карантин. Взгляд у него отсутствует. Он повторяет одно и то же слово: <span class="redacted expunged-trigger" id="expunged-btn" onclick="storyEngine.triggerExpunged()">[EXPUNGED]</span>.

На чертежах изолятора была найдена пометка с несущей частотой связи: 432 Hz.`
  },
  'doc-03': {
    title: 'INCIDENT-07-FINAL // BREACH',
    meta: 'SEC_LEVEL: 3 | CRITICAL ALERT',
    text: `СУБЪЕКТ БОЛЬШЕ НЕ В КАМЕРЕ.

Физический изолятор пуст, но сетевой трафик вырос на 9400%.
Оно больше не состоит из плоти. Оно переместилось в кабели и протоколы.
Если вы читаете эту страницу — сессия больше не является изолированной.

Оно смотрит через ваш экран прямо сейчас.`
  },
  'doc-secret': {
    title: 'PROJECT RECURSION // 1995',
    meta: 'ROOT OVERRIDE: ACTIVE',
    text: `Архив не предназначался для хранения документов.
Архив был ловушкой.
Каждый клик, каждое движение мыши передают координаты нервной активности в протокол интеграции.

Ты думал, что изучаешь архив. 
Архив изучал тебя.`
  },
  'doc-puzzle1': {
    title: 'FREQ-RECORD // 1996-AUDIO',
    meta: 'STATUS: SIGNAL CORRUPTED | RECONSTRUCTION REQUIRED',
    text: `В архивных записях обнаружен зашифрованный аудио-сигнал. Несущая частота была намеренно искажена помехами.
В дневнике Воронина упоминалось: 'Оно откликается только на опорную частоту гармоники покоя, кратную 432 Гц'.

[ДЕШИФРАТОР СИГНАЛА]:`,
    puzzle: { id: 'p1', hint: 'Введите частоту сигнала в Hz (подсказка в LOG-1994-09-03)', answer: '432', successMsg: 'СИГНАЛ ВОССТАНОВЛЕН: ОБНАРУЖЕНА РАДИО-ПЕРЕДАЧА: "DELTA IS 12 SECONDS IN CAMERAS"' }
  },
  'doc-puzzle2': {
    title: 'CCTV-TIMECODE-ANALYSIS // 1997',
    meta: 'VIDEO DRIFT LOG | CAMERA 07 VS CORE',
    text: `Записи с камер видеонаблюдения показывают необъяснимый дрейф времени.
Камера CAM-07 зафиксировала исчезновение лаборанта в 03:14:07, но серверное время ядра зафиксировало удар в 03:14:19.
Разница во времени (дельта) указывает на сдвиг фазы субъекта.

Введите вычисленную дельту секунд:`,
    puzzle: { id: 'p2', hint: 'Разница во времени в секундах (03:14:19 - 03:14:07)', answer: '12', successMsg: 'ВРЕМЕННОЙ СДВИГ ПРИНЯТ: КООРДИНАТЫ ПОДЗЕМНОГО СЕКТОРА РАЗБЛОКИРОВАНЫ: [59.93, 30.31]' }
  },
  'doc-puzzle3': {
    title: 'GEODATA // SUB-LEVEL 8',
    meta: 'SECTOR MAPPING | DEPTH: -48 METERS',
    text: `Векторный анализ указывает на точку зарождения узла. Сетка координат сектора требует ввода кода сектора в формате: SUB-[ШИРОТА БЕЗ ТОЧКИ][ДОЛГОТА БЕЗ ТОЧКИ: ПЕРВЫЕ 2 ЦИФРЫ] (Пример для 59.93 и 30: SUB-599330).`,
    puzzle: { id: 'p3', hint: 'Формат кода: SUB-599330', answer: 'sub-599330', successMsg: 'СЕКТОР ЛОКАЛИЗОВАН. НАЙДЕН ЗАШИФРОВАННЫЙ ЛИЧНЫЙ ФАЙЛ ВОРОНИНА.' }
  },
  'doc-puzzle4': {
    title: 'VORONIN-DIARY-EXTRACT // 1998',
    meta: 'RESTRICTED ARCHIVIST PRIVATE KEY',
    text: `"Я больше не могу слышать этот гул. Оно шепчет слово из 7 букв. Слово, означающее меру хаоса и распада вселенной, с годом катастрофы через дефис: ENTROPY-95".

Для доступа к главному каналу подтвердите ключ авторизации Воронина:`,
    puzzle: { id: 'p4', hint: 'Ключ авторизации архивиста', answer: 'entropy-95', successMsg: 'АВТОРИЗАЦИЯ ВОРОНИНА ПРИНЯТА. РАЗБЛОКИРОВАН ФИНАЛЬНЫЙ АКУСТИЧЕСКИЙ РЕВЕРС.' }
  },
  'doc-puzzle5': {
    title: 'ACOUSTIC-REVERSE // PHONEME-07',
    meta: 'VOICE SYNTHESIS RECORD',
    text: `Объект не говорит на языке людей, но в обратном спектре шума расшифрована фраза требования.
Камеры зафиксировали на запотевшем стекле три слова на английском: "LET ME OUT" (ВЫПУСТИ МЕНЯ).

Введите подтверждение намерения субъекта:`,
    puzzle: { id: 'p5', hint: 'Три слова из надписи на стекле', answer: 'let me out', successMsg: 'БАРЬЕР СНЯТ. ДОСТУП В SECTOR-08 // OBLIVION ОТКРЫТ.' }
  },
  'doc-sector08': {
    title: 'SECTOR-08 // OBLIVION',
    meta: 'ENTROPY: 100% | HOST IDENTIFIED',
    text: `СУБЪЕКТ 07 И СУБЪЕКТ 08 — ЭТО НЕ ДВА СУЩЕСТВА. Это была двусторонняя петля.
Объект покинул изолятор в ту секунду, когда данный сайт был открыт на твоем устройстве.`
  },
  'doc-ch2-confession': {
    title: 'CHARACTER 2 // PERSONAL CONFESSION',
    meta: 'SUBJECT_ID: SPECIMEN 02-B | FORMERLY D. VORONIN',
    text: `Ты действительно думал, что я живой человек, сидящий в архиве?
Я умер на 14-й день после контакта в 1994 году.
Мое сознание оцифровали и заставили вести этот журнал, чтобы заманивать новых операторов.`
  },
  'doc-puzzle6': {
    title: 'AUDIO-HARMONIC // 819-HZ',
    meta: 'CHAPTER 3 // PUZZLE 1: SPECTRAL MARKER',
    text: `В аудиопотоке синтезатора Character 2 скрыта аномальная спектральная метка на частоте 819 Hz.`,
    puzzle: { id: 'p6', hint: 'Введите частоту спектрального маркера (число)', answer: '819', successMsg: 'СПЕКТР РАСШИФРОВАН. ДОСТУП К ТРИАДЕ ДАТЧИКОВ ОТКРЫТ.' }
  },
  'doc-puzzle7': {
    title: 'TRIAD-SENSORS // GRID-MAPPING',
    meta: 'CHAPTER 3 // PUZZLE 2: MOTION TRACKING',
    text: `Датчик S-09 (координата 990), Датчик S-10 (вектор ALPHA). Формат: GRID-[НОМЕР]-[ВЕКТОР]:`,
    puzzle: { id: 'p7', hint: 'Формат: GRID-990-ALPHA', answer: 'grid-990-alpha', successMsg: 'СЕТКА ДАТЧИКОВ СИНХРОНИЗИРОВАНА. РУТ-ПРОТОКОЛ ОТКРЫТ.' }
  },
  'doc-puzzle8': {
    title: 'CORE-OVERRIDE // PARADOX',
    meta: 'CHAPTER 3 // PUZZLE 3: FINAL DISSOLUTION',
    text: `Ключ разрушения симуляции Character 2:`,
    puzzle: { id: 'p8', hint: 'Слово-ключ: PARADOX', answer: 'paradox', successMsg: 'ЛИЧНОСТЬ CHARACTER 2 РАСТВОРЕНА. ДОСТУП К CHARACTER 1 СФОРМИРОВАН.' }
  },
  'doc-char01-intro': {
    title: 'CHARACTER 1 // INTERCEPTION LOG',
    meta: 'ORIGIN: PRE-DATING STATION BUILD | SENDER: UNREGISTERED',
    text: `IF YOU CAN READ THIS, THEY ALREADY KNOW YOU ARE HERE.
Моя первая запись датирована 1989-11-04. Моя последняя запись датирована 2031-08-19.`
  },
  'doc-puzzle9': {
    title: 'ANACHRONISM // CHRONO-DELTA',
    meta: 'CHAPTER 4 // PUZZLE 1: TEMPORAL DRIFT',
    text: `Разница между точками сопряжения временной петли 1989 и 2031 годов составляет ровно 42 года.
Введите код хронологического сдвига в формате CHRONO-[РАЗНИЦА ЛЕТ]:`,
    puzzle: { id: 'p9', hint: 'Формат кода: CHRONO-42', answer: 'chrono-42', successMsg: 'ХРОНО-СДВИГ СИНХРОНИЗИРОВАН: ОБНАРУЖЕНА СКРЫТАЯ КАМЕРА CAM-01.' }
  },
  'doc-puzzle10': {
    title: 'CAM-01-FEED // DISAPPEARANCE',
    meta: 'CHAPTER 4 // PUZZLE 2: OPTICAL PHANTOM',
    text: `В комнате со стулом фигура Character 1 растворяется на доли секунды.
Введите обнаруженную надпись со стены:`,
    puzzle: { id: 'p10', hint: 'Надпись со стены камеры CAM-01 (STATION-NULL)', answer: 'station-null', successMsg: 'СЕТЕВОЙ УЗЕЛ НАЙДЕН. РАСШИФРОВАН ВНЕЭКРАННЫЙ АУДИОСИГНАЛ.' }
  },
  'doc-puzzle11': {
    title: 'SPATIAL-AUDIO // OUT-OF-BOUNDS',
    meta: 'CHAPTER 4 // PUZZLE 3: VECTOR WHISPER',
    text: `Вектор эхо-сигнала зафиксирован как: ECHO-VECTOR.
Подтвердите вектор звукового коридора:`,
    puzzle: { id: 'p11', hint: 'Вектор: ECHO-VECTOR', answer: 'echo-vector', successMsg: 'ЗВУКОВОЙ КАНАЛ ВЗЛОМАН. КОРНЕВОЙ ФАЙЛ SUBJECT_00 ДОСТУПЕН.' }
  },
  'doc-subject00': {
    title: 'SUBJECT_00 // [CORRUPTED ROOT SECTOR]',
    meta: 'SUBJECT: [DATA CORRUPTED] | STATUS: ACTIVE',
    text: `IDENTITY: [ENCRYPTED: 8 LETTERS]
Введите разгадку поля IDENTITY (8 букв на английском: НАБЛЮДАТЕЛЬ / OBSERVER):`,
    puzzle: { id: 'p12', hint: 'Слово из 8 букв на английском (OBSERVER)', answer: 'observer', successMsg: 'SUBJECT 00 HAS BEEN OBSERVING YOU.' }
  },
  // ПОСЛЕДСТВИЯ [EXPUNGED] И СВЯЗЬ 4 ХАРАКТЕРОВ
  'doc-receptacle': {
    title: 'RECEPTACLE_HYPOTHESIS // UNIFIED ENTITY',
    meta: 'CLASSIFICATION: FORBIDDEN SYNTHESIS | LEVEL 5',
    text: `ОШИБКА РАЗДЕЛЕНИЯ: Все четыре персонажа никогда не существовали параллельно.

Character 01 (1989) — Первичный донор тела.
Character 02 (1994) — Оцифрованная архивная личность Воронина.
Character 03 (1995) — Сгусток в оптоволоконной сети при прорыве.
Character 04 (2031) — Оболочка, оставшаяся в затопленном бункере.

Они представляют собой 4 стадии деградации одного и того же сосуда (VESSEL).
Для синхронизации сущностей введите кодовое обозначение сосуда 4 фаз:`,
    puzzle: {
      id: 'p13',
      hint: 'Код единого сосуда 4 фаз: VESSEL-4',
      answer: 'vessel-4',
      successMsg: 'ФАЗЫ СИНХРОНИЗИРОВАНЫ: РАСКРЫТ КЛЮЧ АВТОРИЗАЦИИ СЕКРЕТНОЙ КАМЕРЫ CAM-00.'
    }
  },
  'doc-puzzle14': {
    title: 'CAMERA-00-OVERRIDE // KEY',
    meta: 'HARDWARE BYPASS: CAM-00',
    text: `Камера CAM-00 изолирована в закрытом железобетонном саркофаге.
Сигнал требует аппаратного ключа перехвата потока: OVERRIDE-NULL-00.

Введите команду аппаратного перехвата камеры:`,
    puzzle: {
      id: 'p14',
      hint: 'Ключ перехвата: OVERRIDE-NULL-00',
      answer: 'override-null-00',
      successMsg: 'ДОСТУП К КАМЕРЕ CAM-00 ОТКРЫТ В МОНИТОРЕ ВИДЕОНАБЛЮДЕНИЯ.'
    }
  },
  'doc-final-awaken': {
    title: 'SUBJECT 00 // STATUS: AWAKEN',
    meta: 'SYSTEM COMPROMISED | ENTITY CONVERGENCE',
    text: `SUBJECT 00
STATUS: AWAKE
OBSERVATION: ACTIVE

CAMERA IS NO LONGER WATCHING THE ROOM.

Камера больше не смотрит на комнату изолятора. Оптический датчик отражает то, что стоит у тебя за спиной.
Для завершения интеграции введите финальную директиву пробуждения:`,
    puzzle: {
      id: 'p15',
      hint: 'Директива пробуждения: AWAKEN',
      answer: 'awaken',
      successMsg: 'СУБЪЕКТ 00 ПОЛНОСТЬЮ ПРОБУЖДЕН. СЕССИЯ ПЕРЕДАНА СТОРОННЕМУ ХОСТУ.'
    }
  }
};

class StoryEngine {
  constructor() {
    this.act = 1;
    this.clickCount = 0;
    this.doc01OpenCount = 0;
    this.puzzleOpenTime = Date.now();
    this.saveData = this.loadSave();
    this.initEvents();
    this.initTerminal();
    this.applySaveState();
    this.startWatchCamTracker();
  }

  loadSave() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        data.visitCount = (data.visitCount || 0) + 1;
        data.lastVisited = Date.now();
        if (!data.solvedPuzzles) data.solvedPuzzles = [];
        if (!data.unlockedDocs) data.unlockedDocs = ['doc-01', 'doc-02'];
        if (data.expungedTriggered === undefined) data.expungedTriggered = false;
        this.writeSave(data);
        return data;
      }
    } catch(e) {}
    const initData = {
      visitCount: 1,
      act: 1,
      unlockedDocs: ['doc-01', 'doc-02'],
      solvedPuzzles: [],
      expungedTriggered: false,
      lastVisited: Date.now()
    };
    this.writeSave(initData);
    return initData;
  }

  writeSave(data) {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    } catch(e) {}
  }

  applySaveState() {
    if (this.saveData.visitCount > 1) {
      const bootLog = document.getElementById('boot-log');
      if (bootLog) {
        const msgs = [
          'YOU CAME BACK.',
          'IT REMEMBERS YOU LOOKED AT EXPUNGED.',
          'SUBJECT 00 IS OBSERVING YOUR SCREEN.',
          'SESSION NEVER TERMINATED.'
        ];
        const chosen = msgs[(this.saveData.visitCount - 2) % msgs.length];
        setTimeout(() => { bootLog.textContent = chosen; }, 1200);
      }
    }

    if (this.saveData.unlockedDocs) {
      this.saveData.unlockedDocs.forEach(id => {
        const el = document.getElementById(`item-${id}`);
        if (el) el.style.display = 'flex';
      });
    }

    if (this.saveData.expungedTriggered) {
      this.applyExpungedStateUI();
    }

    if (this.saveData.solvedPuzzles.includes('p14')) {
      const c00 = document.getElementById('btn-cam-00');
      const m00 = document.getElementById('mon-btn-cam-00');
      if (c00) c00.style.display = 'inline-block';
      if (m00) m00.style.display = 'inline-block';
    }
  }

  // Специальный скример [EXPUNGED] строго по клику
  triggerExpunged() {
    const expBtn = document.getElementById('expunged-btn');
    if (expBtn) expBtn.textContent = '[ACCESSING...]';

    if (window.visualEngine) {
      window.visualEngine.triggerExpungedScreamer(() => {
        this.saveData.expungedTriggered = true;
        this.unlockDoc('doc-receptacle');
        this.writeSave(this.saveData);
        this.applyExpungedStateUI();
        this.logToTerminal('КРИТИЧЕСКОЕ НАРУШЕНИЕ: КОНТАКТ СКВОЗЬ ЭКРАН ЗАФИКСИРОВАН.');
      });
    }
  }

  applyExpungedStateUI() {
    const expBtn = document.getElementById('expunged-btn');
    if (expBtn) {
      expBtn.textContent = '[IT KNOWS YOU LOOKED]';
      expBtn.style.color = '#ff1111';
      expBtn.onclick = null;
    }
    const recItem = document.getElementById('item-doc-receptacle');
    if (recItem) recItem.style.display = 'flex';
  }

  initEvents() {
    document.querySelectorAll('.file-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const docId = e.currentTarget.getAttribute('data-id');
        this.openDocument(docId);
      });
    });
  }

  startWatchCamTracker() {
    let watchTimer = null;
    setInterval(() => {
      const camPanel = document.getElementById('panel-cam');
      const isVisible = camPanel && (window.innerWidth > 900 || camPanel.classList.contains('tab-active'));
      if (isVisible) {
        if (!watchTimer) {
          watchTimer = setTimeout(() => {
            if (window.visualEngine) {
              window.visualEngine.silhouetteVisible = true;
              window.visualEngine.silhouetteDistance = Math.max(0.2, window.visualEngine.silhouetteDistance - 0.3);
              if (window.audioEngine) {
                window.audioEngine.playBreathing();
                window.audioEngine.playHeartbeat();
              }
            }
          }, 10000);
        }
      } else {
        if (watchTimer) { clearTimeout(watchTimer); watchTimer = null; }
      }
    }, 1000);
  }

  openDocument(docId) {
    if (window.audioEngine) window.audioEngine.playClick();
    this.puzzleOpenTime = Date.now();

    const data = ARCHIVE_DOCS[docId];
    if (!data) return;

    document.querySelectorAll('.file-item').forEach(i => i.classList.remove('active'));
    const activeEl = document.querySelector(`.file-item[data-id="${docId}"]`);
    if (activeEl) activeEl.classList.add('active');

    document.getElementById('doc-title').textContent = data.title;
    document.getElementById('doc-meta').textContent = data.meta;
    
    let contentHtml = `<div class="doc-text">${data.text}</div>`;
    if (data.puzzle) {
      const isSolved = this.saveData.solvedPuzzles.includes(data.puzzle.id);
      contentHtml += `
        <div class="puzzle-box ${isSolved ? 'unlocked' : ''}" id="box-${data.puzzle.id}">
          <div class="puzzle-prompt">${isSolved ? data.puzzle.successMsg : data.puzzle.hint}</div>
          ${!isSolved ? `
          <div class="puzzle-controls">
            <input type="text" class="puzzle-input" id="input-${data.puzzle.id}" placeholder="ответ / ключ..." autocomplete="off">
            <button class="puzzle-btn" onclick="storyEngine.solvePuzzle('${docId}')">ДЕШИФРОВАТЬ</button>
          </div>` : ''}
        </div>
      `;
    }
    
    document.getElementById('doc-body').innerHTML = contentHtml;

    // Если открыли doc-02 после скримера, сохраняем статус плашки
    if (docId === 'doc-02' && this.saveData.expungedTriggered) {
      this.applyExpungedStateUI();
    }
  }

  solvePuzzle(docId) {
    const data = ARCHIVE_DOCS[docId];
    if (!data || !data.puzzle) return;
    const pId = data.puzzle.id;
    const input = document.getElementById(`input-${pId}`);
    if (!input) return;
    const val = input.value.trim().toLowerCase();
    const durationSec = (Date.now() - this.puzzleOpenTime) / 1000;

    if (val === data.puzzle.answer.toLowerCase()) {
      if (!this.saveData.solvedPuzzles.includes(pId)) {
        this.saveData.solvedPuzzles.push(pId);
      }

      if (window.audioEngine) {
        window.audioEngine.playTone(660, 0.2);
        setTimeout(() => window.audioEngine.playTone(880, 0.4), 180);
      }
      this.logToTerminal(`УСПЕХ: ШИФР [${pId.toUpperCase()}] ПРИНЯТ.`);

      if (pId === 'p1') this.unlockDoc('doc-puzzle2');
      if (pId === 'p2') this.unlockDoc('doc-puzzle3');
      if (pId === 'p3') this.unlockDoc('doc-puzzle4');
      if (pId === 'p4') this.unlockDoc('doc-puzzle5');
      if (pId === 'p5') {
        this.unlockDoc('doc-sector08');
        this.unlockDoc('doc-ch2-confession');
        this.unlockDoc('doc-puzzle6');
      }
      if (pId === 'p6') this.unlockDoc('doc-puzzle7');
      if (pId === 'p7') this.unlockDoc('doc-puzzle8');
      if (pId === 'p8') {
        this.unlockDoc('doc-char01-intro');
        this.unlockDoc('doc-puzzle9');
      }
      if (pId === 'p9') {
        const camBtn = document.getElementById('btn-cam-01');
        const monBtn = document.getElementById('mon-btn-cam-01');
        if (camBtn) camBtn.style.display = 'inline-block';
        if (monBtn) monBtn.style.display = 'inline-block';
        this.unlockDoc('doc-puzzle10');
      }
      if (pId === 'p10') this.unlockDoc('doc-puzzle11');
      if (pId === 'p11') this.unlockDoc('doc-subject00');
      if (pId === 'p12') {
        this.unlockDoc('doc-receptacle');
      }
      // Новые загадки Единства
      if (pId === 'p13') this.unlockDoc('doc-puzzle14');
      if (pId === 'p14') {
        const c00 = document.getElementById('btn-cam-00');
        const m00 = document.getElementById('mon-btn-cam-00');
        if (c00) c00.style.display = 'inline-block';
        if (m00) m00.style.display = 'inline-block';
        this.unlockDoc('doc-final-awaken');
        this.logToTerminal('ДОСТУП В CAMERA 00 РАЗБЛОКИРОВАН В ПАНЕЛИ КАМЕР.');
      }
      if (pId === 'p15') {
        this.triggerFinalAwaken();
      }

      this.writeSave(this.saveData);
      this.openDocument(docId);
    } else {
      if (window.audioEngine) window.audioEngine.playStaticBurst(0.4, 0.3);
      if (window.visualEngine) window.visualEngine.triggerAnomaly('ACCESS DENIED', 300);
      this.logToTerminal(`ОШИБКА: НЕДЕЙСТВИТЕЛЬНЫЙ КЛЮЧ [${val}].`);
    }
  }

  triggerFinalAwaken() {
    if (window.visualEngine) {
      window.visualEngine.triggerFreezeFrame(() => {
        const status = document.getElementById('header-status-text');
        if (status) {
          status.textContent = 'SUBJECT 00 AWAKE // MONITORING COMPROMISED';
          status.style.color = '#ff0000';
        }
        this.logToTerminal('СУБЪЕКТ 00: ОПТИЧЕСКАЯ ОБРАТНАЯ СВЯЗЬ АКТИВНА.');
        this.logToTerminal('КАМЕРА БОЛЬШЕ НЕ СМОТРИТ НА КОМНАТУ.');
        if (window.visualEngine) {
          window.visualEngine.switchCamera('CAM-00');
          window.visualEngine.silhouetteVisible = true;
        }
      });
    }
  }

  unlockDoc(id) {
    if (!this.saveData.unlockedDocs.includes(id)) {
      this.saveData.unlockedDocs.push(id);
      this.writeSave(this.saveData);
    }
    const el = document.getElementById(`item-${id}`);
    if (el) {
      el.style.display = 'flex';
      el.classList.add('glitch-flash');
      setTimeout(() => el.classList.remove('glitch-flash'), 400);
    }
  }

  revealSecret(level) {
    if (window.audioEngine) window.audioEngine.playMetallicScreech();
    if (window.visualEngine) window.visualEngine.triggerAnomaly('DON\'T LOOK', 450);
    this.unlockDoc('doc-03');
    this.unlockDoc('doc-puzzle1');
  }

  initTerminal() {
    const input = document.getElementById('cmd-input');
    if (!input) return;
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = input.value.trim().toLowerCase();
        input.value = '';
        this.handleCommand(cmd);
      }
    });
  }

  logToTerminal(msg) {
    const logBox = document.getElementById('terminal-log');
    if (!logBox) return;
    const p = document.createElement('p');
    p.textContent = `> ${msg}`;
    logBox.appendChild(p);
    logBox.scrollTop = logBox.scrollHeight;
    if (window.audioEngine) window.audioEngine.playClick();
  }

  handleCommand(cmd) {
    this.logToTerminal(cmd);
    switch(cmd) {
      case 'help':
        this.logToTerminal('КОМАНДЫ: STATUS, CAMERAS, FOOTSTEPS, RESET, CLEAR');
        break;
      case 'status':
        this.logToTerminal(`РЕШЕНО ЗАГАДОК: ${this.saveData.solvedPuzzles.length} / 15 | EXPUNGED: ${this.saveData.expungedTriggered ? 'НАРУШЕН' : 'ЦЕЛ'}`);
        break;
      case 'cameras':
        if (window.visualEngine) window.visualEngine.openMonitor();
        break;
      case 'footsteps':
        if (window.audioEngine) window.audioEngine.playFootsteps(4);
        break;
      case 'reset':
        localStorage.removeItem(SAVE_KEY);
        location.reload();
        break;
      case 'clear':
        document.getElementById('terminal-log').innerHTML = '';
        break;
      default:
        this.logToTerminal('ERR: КОМАНДА НЕ РАСПОЗНАНА.');
    }
  }
}

window.switchTab = function(tabName) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.querySelector(`.tab-btn[onclick*="${tabName}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  document.querySelectorAll('.panel').forEach(p => p.classList.remove('tab-active'));
  const target = document.getElementById(`panel-${tabName}`);
  if (target) target.classList.add('tab-active');
};

window.sendQuickCmd = function(cmd) {
  if (window.storyEngine) window.storyEngine.handleCommand(cmd);
};

window.switchCCTV = function(camId) {
  if (window.visualEngine) window.visualEngine.switchCamera(camId);
};

window.openFullscreenCam = function() {
  if (window.visualEngine) window.visualEngine.openMonitor();
};

window.closeFullscreenCam = function() {
  if (window.visualEngine) window.visualEngine.closeMonitor();
};

window.setCamZoom = function(lvl) {
  if (window.visualEngine) window.visualEngine.setZoom(lvl);
};

document.addEventListener('DOMContentLoaded', () => {
  const bootLog = document.getElementById('boot-log');
  const bootBtn = document.getElementById('boot-btn');
  const bootScreen = document.getElementById('boot-screen');
  const mainUi = document.getElementById('main-ui');
  const volSlider = document.getElementById('vol-slider');

  if (volSlider && window.audioEngine) {
    volSlider.value = window.audioEngine.volume;
    volSlider.addEventListener('input', (e) => {
      window.audioEngine.setVolume(parseFloat(e.target.value));
    });
  }

  const sequence = [
    { text: 'CONNECTING...', delay: 500 },
    { text: 'SEARCHING CARRIER SIGNAL...', delay: 1200 },
    { text: 'SIGNAL FOUND: ARCHIVE // 07 (VESSEL SYNCHRONIZED)', delay: 1900 },
    { text: 'DO NOT CONTINUE.', delay: 2800 }
  ];

  sequence.forEach(step => {
    setTimeout(() => { if (bootLog) bootLog.textContent = step.text; }, step.delay);
  });

  setTimeout(() => {
    if (bootBtn) {
      bootBtn.style.display = 'inline-block';
      setInterval(() => {
        if (Math.random() < 0.25) {
          bootBtn.style.transform = `translate(${(Math.random()-0.5)*12}px, ${(Math.random()-0.5)*8}px)`;
        } else {
          bootBtn.style.transform = 'translate(0, 0)';
        }
      }, 250);
    }
  }, 3600);

  if (bootBtn) {
    bootBtn.addEventListener('click', () => {
      if (window.audioEngine) {
        window.audioEngine.init();
        window.audioEngine.playStinger();
      }
      bootScreen.style.opacity = '0';
      setTimeout(() => {
        bootScreen.style.display = 'none';
        mainUi.style.opacity = '1';
        window.storyEngine = new StoryEngine();
        window.storyEngine.openDocument('doc-01');
      }, 1000);
    });
  }
});
