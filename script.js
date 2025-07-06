document.addEventListener('DOMContentLoaded', () => {
    // Listy losowych elementów pozostają bez zmian...
    const randomAnimals = [ 'odważny lew', 'mądra sowa', 'szybki gepard', 'przyjazny delfin', 'śpiewający słowik', 'wierny pies', 'sprytny lis', 'wesoła wiewiórka', 'magiczny jednorożec', 'pomocny bóbr', 'leniwy kot', 'pracowita mrówka', 'dumny orzeł', 'majestatyczny wieloryb', 'miniaturowy słoń', 'latająca ryba', 'świecący w ciemności królik', 'kolorowy tukan', 'nieśmiały pancernik', 'rozgadana papuga', 'mechaniczny gołąb', 'niewidzialny chomik', 'tygrys o skrzydłach motyla', 'żółw z rakietowym napędem', 'śpiący nietoperz', 'tańczący pingwin', 'miś polarny w okularach słonecznych', 'kameleon zmieniający się w tęczę', 'śmiejąca się hiena', 'ziewający hipopotam', 'pancernik w zbroi', 'głodny pelikan', 'rozmarzony flaming', 'kret w kasku górniczym', 'dostojna żyrafa', 'szybka antylopa', 'zwinna pantera', 'puchata alpaka', 'sympatyczny kapibara', 'zaskoczona surykatka', 'śpiewający wielbłąd', 'konik polny grający na skrzypcach', 'rozważny orangutan', 'dzielna mysz polna', 'sentymentalny nosorożec', 'zazdrosny pawian', 'skaczący kangur', 'przytulna koala', 'zwinny lemur', 'szczęśliwy szczeniak', 'elegancki łabędź', 'wesoły prosiaczek', 'rozbrykany źrebak', 'pomysłowy szop pracz', 'zaciekawiony jeż', 'odważny byk', 'mądry słoń', 'spokojny żółw', 'zwinny delfin', 'król lew', 'szybki zając', 'silny niedźwiedź', 'wysoka żyrafa', 'zwinna małpa', 'puszysty królik', 'cichy jeleń', 'piękny motyl', 'pracowita pszczoła', 'groźny rekin', 'tajemniczy wilk', 'mały koliber', 'zaskakujący struś', 'kolorowa rybka', 'zwinna jaszczurka', 'śmieszna foka', 'elegancki koń', 'sympatyczna owca', 'zwinna wydra', 'zabawna świnka morska', 'dumny kogut', 'przyjazna krowa', 'sprytna wiewiórka', 'zwinny tygrys', 'mądra ośmiornica', 'piękny paw', 'zwinna gazela', 'silny goryl', 'zwinna puma', 'sympatyczny piesek preriowy', 'śliczna biedronka', 'wesoły konik morski', 'zaskakująca meduza', 'kolorowy rak', 'tajemnicza ważka', 'szybki sokół' ];
    const randomPlaces = [ 'Tęczowy Las', 'Podwodna Kraina Koralowców', 'Latająca Wyspa Chmur', 'Kryształowa Jaskinia Szeptów', 'Zaczarowany Ogród Pełen Kwiatów', 'Gwiezdna Pustynia', 'Miasto Złotych Wież', 'Dolina Zaginionych Rzek', 'Wulkan Czekolady', 'Księżycowe Jezioro', 'Wioska na Grzbiecie Olbrzyma', 'Biblioteka Zaginionych Opowieści', 'Sklep z Latającymi Dywanami', 'Fabryka Snów', 'Port Powietrznych Statków', 'Archipelag Szeptu', 'Kanion Echa', 'Pola Wiecznej Wiosny', 'Zamarznięte Królestwo Czasu', 'Labirynt z Żywopłotu', 'Wodospad Melodii', 'Ukryte Miasto w Dżungli', 'Cyrk na Końcu Świata', 'Tajemnicza Latarnia Morska', 'Opuszczona Stacja Kolejowa Duchów', 'Most z Tęczy', 'Pałac na Dnie Oceanu', 'Szczyt Najwyższej Góry Świata', 'Dolina Śpiących Smoków', 'Wioska Elfów w Koronach Drzew', 'Rynek Niewidzialnych Towarów', 'Kraina, gdzie rzeki płyną do góry', 'Pustynia, gdzie pada słodki deszcz', 'Las, w którym drzewa rozmawiają', 'Miasto zbudowane z piernika', 'Wyspa, która podróżuje po morzu', 'Jaskinia, w której ściany świecą', 'Zamek zrobiony z chmur', 'Podziemne królestwko krasnoludów', 'Akademia Magii i Czarodziejstwa', 'Kraina Zabawy Bez Końca', 'Miasteczko, gdzie czas płynie wolniej', 'Oaza Spokoju', 'Port Kosmiczny dla Statków Międzygwiezdnych', 'Planeta Cukierków', 'Mglista Dolina Tajemnic', 'Zatoka Syren', 'Kraina Wiecznego Słońca', 'Wyspa Skarbów Kapitana Brudnobrodego', 'Wioska Wikingów nad Zatoką Fiordów', 'Starożytne Ruiny w Sercu Dżungli', 'Lodowy Pałac Królowej Śniegu', 'Wielki Mur z Czekolady', 'Pole Bitwy Zabawek', 'Kraina Gigantycznych Warzyw', 'Miasto Robotów', 'Podniebne Miasteczko Ptaków', 'Wesołe Miasteczko na Księżycu', 'Kraina, gdzie wszystko jest do góry nogami', 'Las Grzybów Wielkości Domów', 'Równina Centaurów', 'Królestwo pod Górą', 'Wieża Czarodzieja', 'Zaczarowana Polana', 'Tajemniczy Staw', 'Mroczny Bór', 'Słoneczna Łąka', 'Wysokie Góry', 'Szeroka Rzeka', 'Głęboki Ocean', 'Gorąca Pustynia', 'Zimna Tundra', 'Gęsta Dżungla', 'Ciche Wzgórza', 'Kamienista Plaża', 'Tajemnicza Wyspa', 'Ukryta Dolina', 'Zaginione Miasto', 'Starożytna Świątynia', 'Opuszczony Zamek', 'Tętniące życiem miasto', 'Spokojna wioska', 'Tajemniczy ogród', 'Zaczarowany las', 'Magiczna polana', 'Latający zamek', 'Podwodny świat', 'Kosmiczna stacja', 'Inna planeta', 'Kraina baśni', 'Świat snów' ];
    const randomItems = [ 'latający dywan', 'znikająca czapka', 'magiczny kompas', 'ołówek, który rysuje prawdziwe rzeczy', 'mówiące lusterko', 'butelka z nieskończoną lemoniadą', 'klucz otwierający każde drzwi', 'świecące nasiono', 'buty pozwalające chodzić po wodzie', 'pióro piszące złotem', 'grająca muszelka', 'samomieszająca się filiżanka', 'koc, który opowiada bajki', 'latarka świecąca ciemnością', 'flet, który ożywia rośliny', 'kamień, który pokazuje wspomnienia', 'zegarek zatrzymujący czas', 'lornetka pozwalająca widzieć przyszłość', 'plecak bez dna', 'magiczna fasolka', 'czarodziejska różdżka', 'mikstura niewidzialności', 'eliksir siły', 'księga zaklęć', 'kryształowa kula', 'mapa skarbów, która mówi', 'siedmiomilowe buty', 'czapka niewidka', 'latająca miotła', 'złote jabłko', 'srebrne strzały', 'miecz, który nigdy nie chybia', 'tarcza, która wszystko odbija', 'zaczarowany flet', 'magiczna harfa', 'cudowny pierścień', 'amulet chroniący przed złem', 'talizman przynoszący szczęście', 'kryształ przewidywania', 'kamień filozoficzny', 'dywan, który czyta w myślach', 'okulary pozwalające widzieć przez ściany', 'rękawice dające super siłę', 'perfumy zmieniające nastrój', 'aparat fotografujący marzenia', 'grzebień, który prostuje kręte ścieżki', 'łyżka, która sprawia, że każda zupa jest pyszna', 'poduszka, która gwarantuje piękne sny', 'sznurowadła, które nigdy się nie rozwiązują', 'długopis, który nigdy się nie wypisuje', 'książka, której historia zmienia się za każdym razem', 'farby, które malują ruchome obrazy', 'nożyczki, które potrafią przeciąć zmartwienia', 'klej, który potrafi skleić złamane serce', 'chmura, którą można schować do kieszeni', 'gwiazda, którą można komuś podarować', 'kieszonkowa tęcza', 'słoik pełen śmiechu', 'muzyka, którą można zobaczyć', 'smak, który można usłyszeć', 'zapach, który można dotknąć', 'słowo, które leczy', 'uśmiech, który rozjaśnia mrok', 'pomysł, który zmienia świat', 'marzenie, które się spełnia', 'wspomnienie, które ogrzewa', 'nadzieja, która dodaje skrzydeł', 'miłość, która zwycięża wszystko', 'przyjaźń, która trwa wiecznie', 'odwaga, która pokonuje strach', 'mądrość, która wskazuje drogę', 'szczęście, które można znaleźć wszędzie', 'przygoda, która czeka za rogiem', 'tajemnica, którą trzeba odkryć', 'zagadka, którą trzeba rozwiązać', 'cel, który trzeba osiągnąć', 'droga, którą trzeba przejść', 'wyzwanie, któremu trzeba sprostać', 'przeszkoda, którą trzeba pokonać', 'trudność, z którą trzeba się zmierzyć' ];
    
    const SCRIPT_URL = 'https://red-band-530b.mientos90.workers.dev';

    const formSection = document.getElementById('form-section');
    const generateBtn = document.getElementById('generateBtn');
    const storyContainer = document.getElementById('story-container');
    const storyTitleEl = document.getElementById('storyTitle');
    const storyContentEl = document.getElementById('storyContent');
    const readAloudBtn = document.getElementById('readAloudBtn');
    
    const backgroundMusicPlayer = document.getElementById('backgroundMusicPlayer');
    const toggleMusicBtn = document.getElementById('toggleMusicBtn');
    const voiceVolumeSlider = document.getElementById('voiceVolume');
    // ZMIANA: Pobranie nowego suwaka głośności muzyki
    const musicVolumeSlider = document.getElementById('musicVolume');

    const btnText = generateBtn.querySelector('.btn-text');
    const spinnerContainer = generateBtn.querySelector('.spinner-container');

    let voicePlayer = null;
    let currentAudioBase64 = null;
    let isStoryVisible = false;

    // ZMIANA: Ustawienie nowej, słyszalnej głośności domyślnej
    backgroundMusicPlayer.volume = parseFloat(musicVolumeSlider.value);

    const stopCurrentAudio = (resetButton = true) => {
        if (voicePlayer) {
            voicePlayer.pause();
            voicePlayer = null;
        }
        
        if (resetButton) {
            readAloudBtn.querySelector('.btn-text').textContent = "Odsłuchaj Opowieść";
            readAloudBtn.disabled = false;
        }
    };
    
    const setLoadingState = (isLoading) => {
        generateBtn.disabled = isLoading;
        if (isLoading) {
             btnText.textContent = "Tworzę magię...";
        }
        spinnerContainer.classList.toggle('hidden', !isLoading);
        btnText.classList.toggle('hidden', isLoading);
    };

    const resetToFormView = () => {
        stopCurrentAudio();
        isStoryVisible = false;
        storyContainer.classList.add('hidden');
        formSection.style.display = 'block';
        
        document.getElementById('childName').value = '';
        document.getElementById('animalHelper').value = '';
        document.getElementById('magicPlace').value = '';
        document.getElementById('magicItem').value = '';
        
        btnText.textContent = 'Stwórz Moją Bajkę';
        btnText.classList.remove('hidden');
    };
    
    const executeGeneration = async () => {
        const inputs = {
            childName: document.getElementById('childName').value.trim(),
            animalHelper: document.getElementById('animalHelper').value.trim(),
            magicPlace: document.getElementById('magicPlace').value.trim(),
            magicItem: document.getElementById('magicItem').value.trim(),
        };

        if (Object.values(inputs).some(val => !val)) {
            alert('Proszę wypełnić wszystkie pola, by utkać opowieść!');
            return;
        }
        
        setLoadingState(true);

        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST', mode: 'cors', cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputs)
            });
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ error: `Błąd serwera: ${response.status}` }));
                throw new Error(errorData.error || `Nieznany błąd: ${response.statusText}`);
            }
            const data = await response.json();
            if (data.error) throw new Error(data.error);

            const storyParts = data.story.split('\n');
            const title = storyParts.shift().replace(/[\*#]/g, '');
            const content = storyParts.join('<br>');
            storyTitleEl.textContent = title;
            storyContentEl.innerHTML = content;

            if (data.audioBase64) {
                currentAudioBase64 = data.audioBase64;
                formSection.style.display = 'none';
                storyContainer.classList.remove('hidden');
                isStoryVisible = true;
                btnText.textContent = 'Stwórz Nową Opowieść';

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
        if (voicePlayer && !voicePlayer.paused) {
            stopCurrentAudio();
            return;
        }
        if (!currentAudioBase64) return;
        
        const audioSrc = `data:audio/mp3;base64,${currentAudioBase64}`;
        voicePlayer = new Audio(audioSrc);
        
        voicePlayer.volume = parseFloat(voiceVolumeSlider.value);
        
        const buttonTextEl = readAloudBtn.querySelector('.btn-text');
        buttonTextEl.textContent = "Słucham...";
        readAloudBtn.disabled = true;

        voicePlayer.play().then(() => {
            readAloudBtn.disabled = false;
        }).catch(error => {
            console.error("Błąd odtwarzania głosu:", error);
            stopCurrentAudio();
        });

        voicePlayer.addEventListener('ended', () => stopCurrentAudio(true));
    };
    
    voiceVolumeSlider.addEventListener('input', () => {
        if (voicePlayer) {
            voicePlayer.volume = parseFloat(voiceVolumeSlider.value);
        }
    });

    const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
    document.getElementById('randomAnimalBtn').addEventListener('click', (e) => { e.preventDefault(); document.getElementById('animalHelper').value = getRandomElement(randomAnimals); });
    document.getElementById('randomPlaceBtn').addEventListener('click', (e) => { e.preventDefault(); document.getElementById('magicPlace').value = getRandomElement(randomPlaces); });
    document.getElementById('randomItemBtn').addEventListener('click', (e) => { e.preventDefault(); document.getElementById('magicItem').value = getRandomElement(randomItems); });

    generateBtn.addEventListener('click', () => {
        if (isStoryVisible) {
            resetToFormView();
        } else {
            executeGeneration();
        }
    });
    
    readAloudBtn.addEventListener('click', handleReadAloudClick);

    toggleMusicBtn.addEventListener('click', () => {
        if (backgroundMusicPlayer.paused) {
            backgroundMusicPlayer.play().catch(e => {
                console.error("Nie udało się odtworzyć muzyki w tle. Wymagana interakcja użytkownika.", e);
            });
            toggleMusicBtn.classList.add('is-playing');
            toggleMusicBtn.title = "Wyłącz muzykę w tle";
        } else {
            backgroundMusicPlayer.pause();
            toggleMusicBtn.classList.remove('is-playing');
            toggleMusicBtn.title = "Włącz muzykę w tle";
        }
    });

    // ZMIANA: Nowy listener do regulacji głośności muzyki w tle
    musicVolumeSlider.addEventListener('input', () => {
        backgroundMusicPlayer.volume = parseFloat(musicVolumeSlider.value);
    });
});
