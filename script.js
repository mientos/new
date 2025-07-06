document.addEventListener('DOMContentLoaded', () => {
    // Listy losowych elementów pozostają bez zmian.
    const randomAnimals = [ 'odważny lew', 'mądra sowa', 'szybki gepard', 'przyjazny delfin', 'śpiewający słowik', 'wierny pies', 'sprytny lis', 'wesoła wiewiórka', 'magiczny jednorożec', 'pomocny bóbr', 'leniwy kot', 'pracowita mrówka', 'dumny orzeł', 'majestatyczny wieloryb', 'miniaturowy słoń', 'latająca ryba', 'świecący w ciemności królik', 'kolorowy tukan', 'nieśmiały pancernik', 'rozgadana papuga', 'mechaniczny gołąb', 'niewidzialny chomik', 'tygrys o skrzydłach motyla', 'żółw z rakietowym napędem', 'śpiący nietoperz', 'tańczący pingwin', 'miś polarny w okularach słonecznych', 'kameleon zmieniający się w tęczę', 'śmiejąca się hiena', 'ziewający hipopotam', 'pancernik w zbroi', 'głodny pelikan', 'rozmarzony flaming', 'kret w kasku górniczym', 'dostojna żyrafa', 'szybka antylopa', 'zwinna pantera', 'puchata alpaka', 'sympatyczny kapibara', 'zaskoczona surykatka', 'śpiewający wielbłąd', 'konik polny grający na skrzypcach', 'rozważny orangutan', 'dzielna mysz polna', 'sentymentalny nosorożec', 'zazdrosny pawian', 'skaczący kangur', 'przytulna koala', 'zwinny lemur', 'szczęśliwy szczeniak', 'elegancki łabędź', 'wesoły prosiaczek', 'rozbrykany źrebak', 'pomysłowy szop pracz', 'zaciekawiony jeż', 'odważny byk', 'mądry słoń', 'spokojny żółw', 'zwinny delfin', 'król lew', 'szybki zając', 'silny niedźwiedź', 'wysoka żyrafa', 'zwinna małpa', 'puszysty królik', 'cichy jeleń', 'piękny motyl', 'pracowita pszczoła', 'groźny rekin', 'tajemniczy wilk', 'mały koliber', 'zaskakujący struś', 'kolorowa rybka', 'zwinna jaszczurka', 'śmieszna foka', 'elegancki koń', 'sympatyczna owca', 'zwinna wydra', 'zabawna świnka morska', 'dumny kogut', 'przyjazna krowa', 'sprytna wiewiórka', 'zwinny tygrys', 'mądra ośmiornica', 'piękny paw', 'zwinna gazela', 'silny goryl', 'zwinna puma', 'sympatyczny piesek preriowy', 'śliczna biedronka', 'wesoły konik morski', 'zaskakująca meduza', 'kolorowy rak', 'tajemnicza ważka', 'szybki sokół' ];
    const randomPlaces = [ 'Tęczowy Las', 'Podwodna Kraina Koralowców', 'Latająca Wyspa Chmur', 'Kryształowa Jaskinia Szeptów', 'Zaczarowany Ogród Pełen Kwiatów', 'Gwiezdna Pustynia', 'Miasto Złotych Wież', 'Dolina Zaginionych Rzek', 'Wulkan Czekolady', 'Księżycowe Jezioro', 'Wioska na Grzbiecie Olbrzyma', 'Biblioteka Zaginionych Opowieści', 'Sklep z Latającymi Dywanami', 'Fabryka Snów', 'Port Powietrznych Statków', 'Archipelag Szeptu', 'Kanion Echa', 'Pola Wiecznej Wiosny', 'Zamarznięte Królestwo Czasu', 'Labirynt z Żywopłotu', 'Wodospad Melodii', 'Ukryte Miasto w Dżungli', 'Cyrk na Końcu Świata', 'Tajemnicza Latarnia Morska', 'Opuszczona Stacja Kolejowa Duchów', 'Most z Tęczy', 'Pałac na Dnie Oceanu', 'Szczyt Najwyższej Góry Świata', 'Dolina Śpiących Smoków', 'Wioska Elfów w Koronach Drzew', 'Rynek Niewidzialnych Towarów', 'Kraina, gdzie rzeki płyną do góry', 'Pustynia, gdzie pada słodki deszcz', 'Las, w którym drzewa rozmawiają', 'Miasto zbudowane z piernika', 'Wyspa, która podróżuje po morzu', 'Jaskinia, w której ściany świecą', 'Zamek zrobiony z chmur', 'Podziemne królestwko krasnoludów', 'Akademia Magii i Czarodziejstwa', 'Kraina Zabawy Bez Końca', 'Miasteczko, gdzie czas płynie wolniej', 'Oaza Spokoju', 'Port Kosmiczny dla Statków Międzygwiezdnych', 'Planeta Cukierków', 'Mglista Dolina Tajemnic', 'Zatoka Syren', 'Kraina Wiecznego Słońca', 'Wyspa Skarbów Kapitana Brudnobrodego', 'Wioska Wikingów nad Zatoką Fiordów', 'Starożytne Ruiny w Sercu Dżungli', 'Lodowy Pałac Królowej Śniegu', 'Wielki Mur z Czekolady', 'Pole Bitwy Zabawek', 'Kraina Gigantycznych Warzyw', 'Miasto Robotów', 'Podniebne Miasteczko Ptaków', 'Wesołe Miasteczko na Księżycu', 'Kraina, gdzie wszystko jest do góry nogami', 'Las Grzybów Wielkości Domów', 'Równina Centaurów', 'Królestwo pod Górą', 'Wieża Czarodzieja', 'Zaczarowana Polana', 'Tajemniczy Staw', 'Mroczny Bór', 'Słoneczna Łąka', 'Wysokie Góry', 'Szeroka Rzeka', 'Głęboki Ocean', 'Gorąca Pustynia', 'Zimna Tundra', 'Gęsta Dżungla', 'Ciche Wzgórza', 'Kamienista Plaża', 'Tajemnicza Wyspa', 'Ukryta Dolina', 'Zaginione Miasto', 'Starożytna Świątynia', 'Opuszczony Zamek', 'Tętniące życiem miasto', 'Spokojna wioska', 'Tajemniczy ogród', 'Zaczarowany las', 'Magiczna polana', 'Latający zamek', 'Podwodny świat', 'Kosmiczna stacja', 'Inna planeta', 'Kraina baśni', 'Świat snów' ];
    const randomItems = [ 'latający dywan', 'znikająca czapka', 'magiczny kompas', 'ołówek, który rysuje prawdziwe rzeczy', 'mówiące lusterko', 'butelka z nieskończoną lemoniadą', 'klucz otwierający każde drzwi', 'świecące nasiono', 'buty pozwalające chodzić po wodzie', 'pióro piszące złotem', 'grająca muszelka', 'samomieszająca się filiżanka', 'koc, który opowiada bajki', 'latarka świecąca ciemnością', 'flet, który ożywia rośliny', 'kamień, który pokazuje wspomnienia', 'zegarek zatrzymujący czas', 'lornetka pozwalająca widzieć przyszłość', 'plecak bez dna', 'magiczna fasolka', 'czarodziejska różdżka', 'mikstura niewidzialności', 'eliksir siły', 'księga zaklęć', 'kryształowa kula', 'mapa skarbów, która mówi', 'siedmiomilowe buty', 'czapka niewidka', 'latająca miotła', 'złote jabłko', 'srebrne strzały', 'miecz, który nigdy nie chybia', 'tarcza, która wszystko odbija', 'zaczarowany flet', 'magiczna harfa', 'cudowny pierścień', 'amulet chroniący przed złem', 'talizman przynoszący szczęście', 'kryształ przewidywania', 'kamień filozoficzny', 'dywan, który czyta w myślach', 'okulary pozwalające widzieć przez ściany', 'rękawice dające super siłę', 'perfumy zmieniające nastrój', 'aparat fotografujący marzenia', 'grzebień, który prostuje kręte ścieżki', 'łyżka, która sprawia, że każda zupa jest pyszna', 'poduszka, która gwarantuje piękne sny', 'sznurowadła, które nigdy się nie rozwiązują', 'długopis, który nigdy się nie wypisuje', 'książka, której historia zmienia się za każdym razem', 'farby, które malują ruchome obrazy', 'nożyczki, które potrafią przeciąć zmartwienia', 'klej, który potrafi skleić złamane serce', 'chmura, którą można schować do kieszeni', 'gwiazda, którą można komuś podarować', 'kieszonkowa tęcza', 'słoik pełen śmiechu', 'muzyka, którą można zobaczyć', 'smak, który można usłyszeć', 'zapach, który można dotknąć', 'słowo, które leczy', 'uśmiech, który rozjaśnia mrok', 'pomysł, który zmienia świat', 'marzenie, które się spełnia', 'wspomnienie, które ogrzewa', 'nadzieja, która dodaje skrzydeł', 'miłość, która zwycięża wszystko', 'przyjaźń, która trwa wiecznie', 'odwaga, która pokonuje strach', 'mądrość, która wskazuje drogę', 'szczęście, które można znaleźć wszędzie', 'przygoda, która czeka za rogiem', 'tajemnica, którą trzeba odkryć', 'zagadka, którą trzeba rozwiązać', 'cel, który trzeba osiągnąć', 'droga, którą trzeba przejść', 'wyzwanie, któremu trzeba sprostać', 'przeszkoda, którą trzeba pokonać', 'trudność, z którą trzeba się zmierzyć' ];
    
    // TWOJA ORYGINALNA PLAYLISTA
    const backgroundMusicPlaylist = [
        'https://cdn.pixabay.com/download/audio/2024/09/22/audio_6a4d382fe6.mp3', 
        'https://cdn.pixabay.com/download/audio/2024/08/06/audio_81f51dde6c.mp3', 
        'https://cdn.pixabay.com/download/audio/2024/12/18/audio_e07679a5ce.mp3',  
        'https://cdn.pixabay.com/download/audio/2025/04/27/audio_835501c0f8.mp3', 
        'https://cdn.pixabay.com/download/audio/2025/05/09/audio_0192877465.mp3', 
        'https://cdn.pixabay.com/download/audio/2025/05/09/audio_3fb7eb81be.mp3'
    ];

    // --- Pobranie elementów DOM ---
    const entryOverlay = document.getElementById('entry-overlay');
    const enterBtn = document.getElementById('enterBtn');
    const SCRIPT_URL = 'https://red-band-530b.mientos90.workers.dev';
    const formSection = document.getElementById('form-section');
    const generateBtn = document.getElementById('generateBtn');
    const storyContainer = document.getElementById('story-container');
    const storyTitleEl = document.getElementById('storyTitle');
    const storyContentEl = document.getElementById('storyContent');
    const storyStyleSelect = document.getElementById('storyStyle');
    const ageCategorySelect = document.getElementById('ageCategory'); // NOWY ELEMENT
    const readAloudBtn = document.getElementById('readAloudBtn');
    const backgroundMusicPlayer = document.getElementById('backgroundMusicPlayer');
    const toggleMusicBtn = document.getElementById('toggleMusicBtn');
    const voiceVolumeSlider = document.getElementById('voiceVolume');
    const musicVolumeSlider = document.getElementById('musicVolume');
    const btnText = generateBtn.querySelector('.btn-text');
    const spinnerContainer = generateBtn.querySelector('.spinner-container');

    // --- Zmienne stanu aplikacji ---
    let voicePlayer = null;
    let currentAudioBase64 = null;
    let isStoryVisible = false;
    let typewriterInterval = null;
    let skipTypewriterHandler = null;

    // --- Inicjalizacja Aplikacji ---
    const randomIndex = Math.floor(Math.random() * backgroundMusicPlaylist.length);
    backgroundMusicPlayer.src = backgroundMusicPlaylist[randomIndex];
    backgroundMusicPlayer.volume = parseFloat(musicVolumeSlider.value);
    backgroundMusicPlayer.load();

    // --- Definicje funkcji pomocniczych ---
    const stopCurrentAudio = (resetButton = true) => {
        if (voicePlayer) { voicePlayer.pause(); voicePlayer = null; }
        if (resetButton) {
            readAloudBtn.querySelector('.btn-text').textContent = "Odsłuchaj Opowieść";
            readAloudBtn.disabled = false;
        }
    };
    
    const setLoadingState = (isLoading) => {
        generateBtn.disabled = isLoading;
        btnText.classList.toggle('hidden', isLoading);
        spinnerContainer.classList.toggle('hidden', !isLoading);
        if (isLoading) { btnText.textContent = "Tworzę magię..."; }
    };

    const resetToFormView = () => {
        stopCurrentAudio();
        if (typewriterInterval) clearInterval(typewriterInterval);
        if (skipTypewriterHandler) document.removeEventListener('click', skipTypewriterHandler);
        isStoryVisible = false;
        storyContainer.classList.add('hidden');
        formSection.style.display = 'block';
        ['childName', 'animalHelper', 'magicPlace', 'magicItem'].forEach(id => document.getElementById(id).value = '');
        btnText.textContent = 'Stwórz Moją Bajkę';
    };
    
    const typewriterEffect = (element, htmlString, callback) => {
        if (typewriterInterval) clearInterval(typewriterInterval);
        if (skipTypewriterHandler) document.removeEventListener('click', skipTypewriterHandler);
        element.innerHTML = '';
        element.style.setProperty('--cursor-opacity', '1');

        const tokens = htmlString.match(/<[^>]+>|./g) || [];
        
        const completeAnimation = () => {
            clearInterval(typewriterInterval);
            typewriterInterval = null;
            element.innerHTML = htmlString;
            element.style.setProperty('--cursor-opacity', '0');
            if (skipTypewriterHandler) {
                document.removeEventListener('click', skipTypewriterHandler);
                skipTypewriterHandler = null;
            }
            if (callback) callback();
        };

        skipTypewriterHandler = () => completeAnimation();
        setTimeout(() => {
            if (typewriterInterval) {
                document.addEventListener('click', skipTypewriterHandler, { once: true });
            }
        }, 50);
        
        let i = 0;
        typewriterInterval = setInterval(() => {
            if (i >= tokens.length) {
                completeAnimation();
                return;
            }
            element.innerHTML += tokens[i];
            i++;
        }, 15);
    };

    const executeGeneration = async () => {
        const inputs = {
            childName: document.getElementById('childName').value.trim(),
            animalHelper: document.getElementById('animalHelper').value.trim(),
            magicPlace: document.getElementById('magicPlace').value.trim(),
            magicItem: document.getElementById('magicItem').value.trim(),
            style: storyStyleSelect.value,
            ageCategory: ageCategorySelect.value // NOWY WPIS
        };

        if (Object.values(inputs).some((val, index) => !val && index < 4)) {
            alert('Proszę wypełnić wszystkie pola (oprócz stylu i wieku), by utkać opowieść!');
            return;
        }
        
        setLoadingState(true);

        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST', mode: 'cors', cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputs)
            });
            if (!response.ok) throw new Error(`Błąd serwera: ${response.status}`);
            
            const data = await response.json();
            if (data.error) throw new Error(data.error);
            
            const rawStory = data.story.trim();
            const storyParts = rawStory.split('\n');
            const title = storyParts.shift().replace(/[\*#]/g, '').trim();
            let content = storyParts
                .filter(line => line.trim() !== '')
                .join('<br>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

            storyTitleEl.textContent = title;

            if (data.audioBase64) {
                currentAudioBase64 = data.audioBase64;
                formSection.style.display = 'none';
                storyContainer.classList.remove('hidden');
                isStoryVisible = true;
                btnText.textContent = 'Stwórz Nową Opowieść';
                
                typewriterEffect(storyContentEl, content);
                storyTitleEl.scrollIntoView({ behavior: 'smooth' });
            }
        } catch (error) {
            console.error('Błąd:', error);
            alert(`Wystąpił błąd podczas tkania magii: ${error.message}`);
        } finally {
            setLoadingState(false);
        }
    };

    const handleReadAloudClick = () => {
        if (voicePlayer && !voicePlayer.paused) { stopCurrentAudio(); return; }
        if (!currentAudioBase64) return;
        
        voicePlayer = new Audio(`data:audio/mp3;base64,${currentAudioBase64}`);
        voicePlayer.volume = parseFloat(voiceVolumeSlider.value);
        
        const buttonTextEl = readAloudBtn.querySelector('.btn-text');
        buttonTextEl.textContent = "Słucham...";
        readAloudBtn.disabled = true;

        voicePlayer.play().then(() => readAloudBtn.disabled = false)
            .catch(error => { console.error("Błąd odtwarzania głosu:", error); stopCurrentAudio(); });

        voicePlayer.addEventListener('ended', () => stopCurrentAudio(true));
    };

    // --- Podpięcie Event Listenerów ---
    
    enterBtn.addEventListener('click', () => {
        entryOverlay.classList.add('open');
        backgroundMusicPlayer.play().catch(e => console.warn("Autoodtwarzanie muzyki zablokowane przez przeglądarkę."));
        toggleMusicBtn.classList.add('is-playing');
        toggleMusicBtn.title = "Wyłącz muzykę w tle";
        
        setTimeout(() => { entryOverlay.style.display = 'none'; }, 2600);
    });
    
    generateBtn.addEventListener('click', () => { isStoryVisible ? resetToFormView() : executeGeneration(); });
    
    readAloudBtn.addEventListener('click', handleReadAloudClick);
    
    toggleMusicBtn.addEventListener('click', () => {
        if (backgroundMusicPlayer.paused) {
            backgroundMusicPlayer.play();
            toggleMusicBtn.classList.add('is-playing');
            toggleMusicBtn.title = "Włącz muzykę w tle";
        } else {
            backgroundMusicPlayer.pause();
            toggleMusicBtn.classList.remove('is-playing');
            toggleMusicBtn.title = "Włącz muzykę w tle";
        }
    });

    musicVolumeSlider.addEventListener('input', () => { backgroundMusicPlayer.volume = parseFloat(musicVolumeSlider.value); });
    voiceVolumeSlider.addEventListener('input', () => { if (voicePlayer) voicePlayer.volume = parseFloat(voiceVolumeSlider.value); });
    
    const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
    document.getElementById('randomAnimalBtn').addEventListener('click', (e) => { e.preventDefault(); document.getElementById('animalHelper').value = getRandomElement(randomAnimals); });
    document.getElementById('randomPlaceBtn').addEventListener('click', (e) => { e.preventDefault(); document.getElementById('magicPlace').value = getRandomElement(randomPlaces); });
    document.getElementById('randomItemBtn').addEventListener('click', (e) => { e.preventDefault(); document.getElementById('magicItem').value = getRandomElement(randomItems); });
});
