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
    puzzle: { id: 'p1', hint: 'Частота сигнала в Hz (LOG-1994-09-03)', answer: '432', successMsg: 'СИГНАЛ ВОССТАНОВЛЕН: РАДИО-ПЕРЕДАЧА: "DELTA IS 12 SECONDS IN CAMERAS"' }
  },
  'doc-puzzle2': {
    title: 'CCTV-TIMECODE-ANALYSIS // 1997',
    meta: 'VIDEO DRIFT LOG | CAMERA 07 VS CORE',
    text: `Камера CAM-07 зафиксировала исчезновение в 03:14:07, серверное время в 03:14:19.
Разница во времени (дельта):`,
    puzzle: { id: 'p2', hint: 'Разница в секундах (03:14:19 - 03:14:07)', answer: '12', successMsg: 'ВРЕМЕННОЙ СДВИГ ПРИНЯТ: КООРДИНАТЫ РАЗБЛОКИРОВАНЫ: [59.93, 30.31]' }
  },
  'doc-puzzle3': {
    title: 'GEODATA // SUB-LEVEL 8',
    meta: 'SECTOR MAPPING | DEPTH: -48 METERS',
    text: `Формат кода сектора: SUB-[ШИРОТА БЕЗ ТОЧКИ][ДОЛГОТА БЕЗ ТОЧКИ: ПЕРВЫЕ 2 ЦИФРЫ] (Пример для 59.93 и 30: SUB-599330).`,
    puzzle: { id: 'p3', hint: 'Формат: SUB-599330', answer: 'sub-599330', successMsg: 'СЕКТОР ЛОКАЛИЗОВАН. НАЙДЕН ФАЙЛ ВОРОНИНА.' }
  },
  'doc-puzzle4': {
    title: 'VORONIN-DIARY-EXTRACT // 1998',
    meta: 'RESTRICTED ARCHIVIST PRIVATE KEY',
    text: `"Оно шепчет слово из 7 букв. Мера хаоса и распада с годом через дефис: ENTROPY-95".`,
    puzzle: { id: 'p4', hint: 'Ключ архивиста', answer: 'entropy-95', successMsg: 'АВТОРИЗАЦИЯ ВОРОНИНА ПРИНЯТА.' }
  },
  'doc-puzzle5': {
    title: 'ACOUSTIC-REVERSE // PHONEME-07',
    meta: 'VOICE SYNTHESIS RECORD',
    text: `Надпись на запотевшем стекле: "LET ME OUT" (ВЫПУСТИ МЕНЯ).`,
    puzzle: { id: 'p5', hint: 'Три слова из надписи на стекле', answer: 'let me out', successMsg: 'БАРЬЕР СНЯТ. ДОСТУП В SECTOR-08 ОТКРЫТ.' }
  },
  'doc-sector08': {
    title: 'SECTOR-08 // OBLIVION',
    meta: 'ENTROPY: 100% | HOST IDENTIFIED',
    text: `СУБЪЕКТ 07 И СУБЪЕКТ 08 — ЭТО НЕ ДВА СУЩЕСТВА. Это была двусторонняя петля.
Объект покинул изолятор в ту секунду, когда сайт был открыт на твоем устройстве.`
  },
  'doc-ch2-confession': {
    title: 'CHARACTER 2 // PERSONAL CONFESSION',
    meta: 'SUBJECT_ID: SPECIMEN 02-B | FORMERLY D. VORONIN',
    text: `Ты действительно думал, что я живой человек, сидящий в архиве?
Я умер на 14-й день после контакта в 1994 году.`
  },
  'doc-puzzle6': {
    title: 'AUDIO-HARMONIC // 819-HZ',
    meta: 'CHAPTER 3 // PUZZLE 1: SPECTRAL MARKER',
    text: `Спектральная метка на частоте 819 Hz.`,
    puzzle: { id: 'p6', hint: 'Частота маркера', answer: '819', successMsg: 'СПЕКТР РАСШИФРОВАН. ДОСТУП К ДАТЧИКАМ ОТКРЫТ.' }
  },
  'doc-puzzle7': {
    title: 'TRIAD-SENSORS // GRID-MAPPING',
    meta: 'CHAPTER 3 // PUZZLE 2: MOTION TRACKING',
    text: `Датчик S-09 (990), Датчик S-10 (вектор ALPHA). Формат: GRID-[НОМЕР]-[ВЕКТОР]:`,
    puzzle: { id: 'p7', hint: 'Формат: GRID-990-ALPHA', answer: 'grid-990-alpha', successMsg: 'СЕТКА ДАТЧИКОВ СИНХРОНИЗИРОВАНА.' }
  },
  'doc-puzzle8': {
    title: 'CORE-OVERRIDE // PARADOX',
    meta: 'CHAPTER 3 // PUZZLE 3: FINAL DISSOLUTION',
    text: `Ключ разрушения симуляции Character 2:`,
    puzzle: { id: 'p8', hint: 'Слово-ключ: PARADOX', answer: 'paradox', successMsg: 'ДОСТУП К CHARACTER 1 СФОРМИРОВАН.' }
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
    text: `Разница между 1989 и 2031 годами составляет 42 года. Формат CHRONO-[РАЗНИЦА]:`,
    puzzle: { id: 'p9', hint: 'Формат: CHRONO-42', answer: 'chrono-42', successMsg: 'СКРЫТАЯ КАМЕРА CAM-01 РАЗБЛОКИРОВАНА.' }
  },
  'doc-puzzle10': {
    title: 'CAM-01-FEED // DISAPPEARANCE',
    meta: 'CHAPTER 4 // PUZZLE 2: OPTICAL PHANTOM',
    text: `Надпись со стены камеры CAM-01:`,
    puzzle: { id: 'p10', hint: 'Надпись со стены (STATION-NULL)', answer: 'station-null', successMsg: 'ВНЕЭКРАННЫЙ АУДИОСИГНАЛ РАСШИФРОВАН.' }
  },
  'doc-puzzle11': {
    title: 'SPATIAL-AUDIO // OUT-OF-BOUNDS',
    meta: 'CHAPTER 4 // PUZZLE 3: VECTOR WHISPER',
    text: `Вектор эхо-сигнала: ECHO-VECTOR:`,
    puzzle: { id: 'p11', hint: 'Вектор: ECHO-VECTOR', answer: 'echo-vector', successMsg: 'SUBJECT_00 ДОСТУПЕН.' }
  },
  'doc-subject00': {
    title: 'SUBJECT_00 // [CORRUPTED ROOT SECTOR]',
    meta: 'SUBJECT: [DATA CORRUPTED] | STATUS: ACTIVE',
    text: `Разгадка поля IDENTITY (8 букв на английском: НАБЛЮДАТЕЛЬ):`,
    puzzle: { id: 'p12', hint: 'Слово из 8 букв (OBSERVER)', answer: 'observer', successMsg: 'SUBJECT 00 HAS BEEN OBSERVING YOU.' }
  },
  'doc-receptacle': {
    title: 'RECEPTACLE_HYPOTHESIS // UNIFIED ENTITY',
    meta: 'CLASSIFICATION: FORBIDDEN SYNTHESIS | LEVEL 5',
    text: `Все четыре персонажа представляют собой 4 стадии деградации одного и того же сосуда (VESSEL).
Кодовое обозначение сосуда 4 фаз:`,
    puzzle: { id: 'p13', hint: 'Код единого сосуда: VESSEL-4', answer: 'vessel-4', successMsg: 'ФАЗЫ СИНХРОНИЗИРОВАНЫ.' }
  },
  'doc-puzzle14': {
    title: 'CAMERA-00-OVERRIDE // KEY',
    meta: 'HARDWARE BYPASS: CAM-00',
    text: `Команда аппаратного перехвата саркофага CAM-00:`,
    puzzle: { id: 'p14', hint: 'Ключ перехвата: OVERRIDE-NULL-00', answer: 'override-null-00', successMsg: 'ДОСТУП К КАМЕРЕ CAM-00 ОТКРЫТ.' }
  },
  // 6 НОВЫХ ДОКУМЕНТОВ И 3 НОВЫЕ ГОЛОВОЛОМКИ (ГЛАВА СУБЪЕКТА 00)
  'doc-vessel-ch1': {
    title: 'LOG-1989-PROVENANCE // VESSEL-01',
    meta: 'ORIGIN: ZERO-HOUR RECORD',
    text: `04 ноября 1989 года. Бункер еще не имел стен.
Мы опустили геодезический щуп на отметку -48 метров и наткнулись на пустоту.
В пустоте раздавался равномерный стук — 38 ударов в минуту.
Тот, кто первым спустился по тросу, вернулся с черными белками глаз и шептал: 'Оно не спит. Оно ждет, когда мы построим терминалы'.`
  },
  'doc-vessel-ch3': {
    title: 'OPTIC-FIBER-CONVERGENCE // 1995',
    meta: 'TELEMETRY BURST // NODE-GAMMA',
    text: `Импульсы в оптоволоконной магистрали перестали подчиняться TCP/IP.
Пакеты данных формируют замкнутый временной мост между точкой 1989 года и будущей точкой 2031 года.
Ключ синхронизации временного моста формируется как: NEXUS-1989-2031.

Введите код временного моста:`,
    puzzle: {
      id: 'p16',
      hint: 'Код временного моста: NEXUS-1989-2031',
      answer: 'nexus-1989-2031',
      successMsg: 'ВРЕМЕННОЙ МОСТ ЗАМКНУТ. РАСКРЫТ ПРОТОКОЛ ОПТИЧЕСКОГО ИСКАЖЕНИЯ.'
    }
  },
  'doc-sub00-origins': {
    title: 'THE UNMARKED SPECIMEN // ZERO',
    meta: 'DOCUMENT-ID: #000-VOID',
    text: `Субъект 00 никогда не был помещен в изолятор.
Изолятор построили вокруг точки, в которой возник разрыв восприятия.
Камеры видеонаблюдения были установлены не для охраны объекта.
Они были направлены внутрь, чтобы объект мог наблюдать за внешним миром через линзы.`
  },
  'doc-reflection-data': {
    title: 'GLASS COATING ANOMALY // REFRACT',
    meta: 'OPTICS DIVISION REPORT',
    text: `Особое внимание обратите на защитные стекла мониторов терминалов.
Свинцовое напыление отражает свет под углом 47 градусов, но при активации Субъекта 00 угол преломления меняется на обратный.
Код калибровки оптического преломления: REFRACT-47.

Подтвердите калибровку стекла:`,
    puzzle: {
      id: 'p17',
      hint: 'Код калибровки преломления: REFRACT-47',
      answer: 'refract-47',
      successMsg: 'ОПТИКА СИНХРОНИЗИРОВАНА. ДОСТУП К ФИНАЛЬНОЙ ДИРЕКТИВЕ СЛИЯНИЯ ОТКРЫТ.'
    }
  },
  'doc-chrono-loop': {
    title: 'CLOSED LOOP HYPOTHESIS // CONVERGENCE',
    meta: 'THEORETICAL CORE // ABSOLUTE',
    text: `Если все 4 Character — одно и то же лицо в разных точках времени, то кто читает эти строки прямо сейчас?
Ты не сторонний исследователь.
Твое внимание завершает цепь.
Слово финального слияния всех четырех сущностей: CONVERGENCE (КОНВЕРГЕНЦИЯ).

Введите директиву слияния:`,
    puzzle: {
      id: 'p18',
      hint: 'Директива слияния: CONVERGENCE',
      answer: 'convergence',
      successMsg: 'КОНВЕРГЕНЦИЯ ЗАВЕРШЕНА. СУБЪЕКТ 00 ВСТАЛ ЗА ТВОЕЙ СПИНОЙ.'
    }
  },
  'doc-terminal-breach': {
    title: 'OPERATOR IS THE ANCHOR // FINAL',
    meta: 'CORE DIRECTIVE // DO NOT CLOSE',
    text: `СЕССИЯ ПОЛНОСТЬЮ ПЕРЕДАНА СУБЪЕКТУ 00.

Камера больше не смотрит на изолятор.
Она смотрит наружу.
Нажми кнопку пробуждения, чтобы подтвердить завершение наблюдения.`,
    puzzle: {
      id: 'p-awaken-final',
      hint: 'Нажмите для подтверждения пробуждения',
      answer: 'awaken',
      successMsg: 'SUBJECT 00 IS AWAKE.'
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
    this.startRandomExpungedEchoes();
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
        if (data.entityStage === undefined) data.entityStage = 0;
        if (data.cam00Visits === undefined) data.cam00Visits = 0;
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
      entityStage: 0,
      cam00Visits: 0,
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

    if (window.visualEngine) {
      window.visualEngine.entityStage = this.saveData.entityStage || 0;
      window.visualEngine.cam00Visits = this.saveData.cam00Visits || 0;
      if (this.saveData.cam00Visits > 1) window.visualEngine.cam00HasEntity = true;
    }
  }

  startRandomExpungedEchoes() {
    setInterval(() => {
      if (this.saveData.expungedTriggered && Math.random() < 0.25) {
        if (window.audioEngine) window.audioEngine.playEchoExpunged();
      }
    }, 45000);
  }

  triggerExpunged() {
    const expBtn = document.getElementById('expunged-btn');
    if (expBtn) expBtn.textContent = '[ACCESSING...]';

    if (window.visualEngine) {
      window.visualEngine.triggerExpungedScreamer(() => {
        this.saveData.expungedTriggered = true;
        this.unlockDoc('doc-receptacle');
        this.unlockDoc('doc-vessel-ch1');
        this.unlockDoc('doc-vessel-ch3');
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

    // Мутация старых документов после [EXPUNGED]
    ARCHIVE_DOCS['doc-01'].text = `[ПОВРЕЖДЕНО ПОСЛЕ EXPUNGED]: Первичный контакт не был случайным.\nОно проникло в оптические датчики в 1994 году. Не смотри на экран слишком долго. Оно смотрит в ответ.`;
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
      if (docId === 'doc-terminal-breach') {
        contentHtml += `
          <div class="puzzle-box" style="border-color: #ff1111; margin-top: 20px;">
            <div class="puzzle-prompt" style="color: #ff4444;">СИНХРОНИЗАЦИЯ СУБЪЕКТА 00: ФИНАЛЬНЫЙ АКТ</div>
            <button class="puzzle-btn" style="width: 100%; border-color: #f00; color: #f00; padding: 12px; font-weight: bold;" onclick="storyEngine.triggerAwakenFinal()">[ ИНИЦИАЛИЗИРОВАТЬ ПРОБУЖДЕНИЕ СУБЪЕКТА 00 ]</button>
          </div>
        `;
      } else {
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
    }
    
    document.getElementById('doc-body').innerHTML = contentHtml;

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
      if (pId === 'p13') {
        this.unlockDoc('doc-puzzle14');
        this.unlockDoc('doc-sub00-origins');
      }
      if (pId === 'p14') {
        const c00 = document.getElementById('btn-cam-00');
        const m00 = document.getElementById('mon-btn-cam-00');
        if (c00) c00.style.display = 'inline-block';
        if (m00) m00.style.display = 'inline-block';
        this.unlockDoc('doc-vessel-ch3');
        this.logToTerminal('ДОСТУП В CAMERA 00 РАЗБЛОКИРОВАН В ПАНЕЛИ КАМЕР.');
      }
      if (pId === 'p16') this.unlockDoc('doc-reflection-data');
      if (pId === 'p17') this.unlockDoc('doc-chrono-loop');
      if (pId === 'p18') {
        this.unlockDoc('doc-terminal-breach');
        this.logToTerminal('КРИТИЧЕСКИЙ РУТ: СУБЪЕКТ 00 ГОТОВ К ПРОБУЖДЕНИЮ.');
      }

      this.writeSave(this.saveData);
      this.openDocument(docId);
    } else {
      if (window.audioEngine) window.audioEngine.playStaticBurst(0.4, 0.3);
      if (window.visualEngine) window.visualEngine.triggerAnomaly('ACCESS DENIED', 300);
      this.logToTerminal(`ОШИБКА: НЕДЕЙСТВИТЕЛЬНЫЙ КЛЮЧ [${val}].`);
    }
  }

  triggerAwakenFinal() {
    if (window.visualEngine) {
      window.visualEngine.triggerFinalAwakenSequence(() => {
        const status = document.getElementById('header-status-text');
        if (status) {
          status.textContent = 'SUBJECT 00: AWAKE // CAMERA DISCONNECTED';
          status.style.color = '#ff0000';
        }
        this.logToTerminal('СУБЪЕКТ 00: ПРОБУЖДЕНИЕ ЗАВЕРШЕНО.');
        this.logToTerminal('CAMERA IS NO LONGER WATCHING THE ROOM.');
        this.logToTerminal('SIGNAL LOST.');
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
        this.logToTerminal(`РЕШЕНО ЗАГАДОК: ${this.saveData.solvedPuzzles.length} / 18 | EXPUNGED: ${this.saveData.expungedTriggered ? 'НАРУШЕН' : 'ЦЕЛ'}`);
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
    { text: 'SIGNAL FOUND: ARCHIVE // 07 (SUBJECT 00 AWAKENING)', delay: 1900 },
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
