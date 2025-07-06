const randomAnimals = [ 'odważny lew', 'mądra sowa', 'szybki gepard', 'przyjazny delfin', 'śpiewający słowik', 'wierny pies', 'sprytny lis', 'wesoła wiewiórka', 'magiczny jednorożec', 'pomocny bóbr', 'leniwy kot', 'pracowita mrówka', 'dumny orzeł', 'majestatyczny wieloryb', 'miniaturowy słoń', 'latająca ryba', 'świecący w ciemności królik', 'kolorowy tukan', 'nieśmiały pancernik', 'rozgadana papuga', 'mechaniczny gołąb', 'niewidzialny chomik', 'tygrys o skrzydłach motyla', 'żółw z rakietowym napędem', 'śpiący nietoperz', 'tańczący pingwin', 'miś polarny w okularach słonecznych', 'kameleon zmieniający się w tęczę', 'śmiejąca się hiena', 'ziewający hipopotam', 'pancernik w zbroi', 'głodny pelikan', 'rozmarzony flaming', 'kret w kasku górniczym', 'dostojna żyrafa', 'szybka antylopa', 'zwinna pantera', 'puchata alpaka', 'sympatyczny kapibara', 'zaskoczona surykatka', 'śpiewający wielbłąd', 'konik polny grający na skrzypcach', 'rozważny orangutan', 'dzielna mysz polna', 'sentymentalny nosorożec', 'zazdrosny pawian', 'skaczący kangur', 'przytulna koala', 'zwinny lemur', 'szczęśliwy szczeniak', 'elegancki łabędź', 'wesoły prosiaczek', 'rozbrykany źrebak', 'pomysłowy szop pracz', 'zaciekawiony jeż', 'odważny byk', 'mądry słoń', 'spokojny żółw', 'zwinny delfin', 'król lew', 'szybki zając', 'silny niedźwiedź', 'wysoka żyrafa', 'zwinna małpa', 'puszysty królik', 'cichy jeleń', 'piękny motyl', 'pracowita pszczoła', 'groźny rekin', 'tajemniczy wilk', 'mały koliber', 'zaskakujący struś', 'kolorowa rybka', 'zwinna jaszczurka', 'śmieszna foka', 'elegancki koń', 'sympatyczna owca', 'zwinna wydra', 'zabawna świnka morska', 'dumny kogut', 'przyjazna krowa', 'sprytna wiewiórka', 'zwinny tygrys', 'mądra ośmiornica', 'piękny paw', 'zwinna gazela', 'silny goryl', 'zwinna puma', 'sympatyczny piesek preriowy', 'śliczna biedronka', 'wesoły konik morski', 'zaskakująca meduza', 'kolorowy rak', 'tajemnicza ważka', 'szybki sokół' ];
const randomPlaces = [ 'Tęczowy Las', 'Podwodna Kraina Koralowców', 'Latająca Wyspa Chmur', 'Kryształowa Jaskinia Szeptów', 'Zaczarowany Ogród Pełen Kwiatów', 'Gwiezdna Pustynia', 'Miasto Złotych Wież', 'Dolina Zaginionych Rzek', 'Wulkan Czekolady', 'Księżycowe Jezioro', 'Wioska na Grzbiecie Olbrzyma', 'Biblioteka Zaginionych Opowieści', 'Sklep z Latającymi Dywanami', 'Fabryka Snów', 'Port Powietrznych Statków', 'Archipelag Szeptu', 'Kanion Echa', 'Pola Wiecznej Wiosny', 'Zamarznięte Królestwo Czasu', 'Labirynt z Żywopłotu', 'Wodospad Melodii', 'Ukryte Miasto w Dżungli', 'Cyrk na Końcu Świata', 'Tajemnicza Latarnia Morska', 'Opuszczona Stacja Kolejowa Duchów', 'Most z Tęczy', 'Pałac na Dnie Oceanu', 'Szczyt Najwyższej Góry Świata', 'Dolina Śpiących Smoków', 'Wioska Elfów w Koronach Drzew', 'Rynek Niewidzialnych Towarów', 'Kraina, gdzie rzeki płyną do góry', 'Pustynia, gdzie pada słodki deszcz', 'Las, w którym drzewa rozmawiają', 'Miasto zbudowane z piernika', 'Wyspa, która podróżuje po morzu', 'Jaskinia, w której ściany świecą', 'Zamek zrobiony z chmur', 'Podziemne królestwo krasnoludów', 'Akademia Magii i Czarodziejstwa', 'Kraina Zabawy Bez Końca', 'Miasteczko, gdzie czas płynie wolniej', 'Oaza Spokoju', 'Port Kosmiczny dla Statków Międzygwiezdnych', 'Planeta Cukierków', 'Mglista Dolina Tajemnic', 'Zatoka Syren', 'Kraina Wiecznego Słońca', 'Wyspa Skarbów Kapitana Brudnobrodego', 'Wioska Wikingów nad Zatoką Fiordów', 'Starożytne Ruiny w Sercu Dżungli', 'Lodowy Pałac Królowej Śniegu', 'Wielki Mur z Czekolady', 'Pole Bitwy Zabawek', 'Kraina Gigantycznych Warzyw', 'Miasto Robotów', 'Podniebne Miasteczko Ptaków', 'Wesołe Miasteczko na Księżycu', 'Kraina, gdzie wszystko jest do góry nogami', 'Las Grzybów Wielkości Domów', 'Równina Centaurów', 'Królestwo pod Górą', 'Wieża Czarodzieja', 'Zaczarowana Polana', 'Tajemniczy Staw', 'Mroczny Bór', 'Słoneczna Łąka', 'Wysokie Góry', 'Szeroka Rzeka', 'Głęboki Ocean', 'Gorąca Pustynia', 'Zimna Tundra', 'Gęsta Dżungla', 'Ciche Wzgórza', 'Kamienista Plaża', 'Tajemnicza Wyspa', 'Ukryta Dolina', 'Zaginione Miasto', 'Starożytna Świątynia', 'Opuszczony Zamek', 'Tętniące życiem miasto', 'Spokojna wioska', 'Tajemniczy ogród', 'Zaczarowany las', 'Magiczna polana', 'Latający zamek', 'Podwodny świat', 'Kosmiczna stacja', 'Inna planeta', 'Kraina baśni', 'Świat snów' ];
const randomItems = [ 'latający dywan', 'znikająca czapka', 'magiczny kompas', 'ołówek, który rysuje prawdziwe rzeczy', 'mówiące lusterko', 'butelka z nieskończoną lemoniadą', 'klucz otwierający każde drzwi', 'świecące nasiono', 'buty pozwalające chodzić po wodzie', 'pióro piszące złotem', 'grająca muszelka', 'samomieszająca się filiżanka', 'koc, który opowiada bajki', 'latarka świecąca ciemnością', 'flet, który ożywia rośliny', 'kamień, który pokazuje wspomnienia', 'zegarek zatrzymujący czas', 'lornetka pozwalająca widzieć przyszłość', 'plecak bez dna', 'magiczna fasolka', 'czarodziejska różdżka', 'mikstura niewidzialności', 'eliksir siły', 'księga zaklęć', 'kryształowa kula', 'mapa skarbów, która mówi', 'siedmiomilowe buty', 'czapka niewidka', 'latająca miotła', 'złote jabłko', 'srebrne strzały', 'miecz, który nigdy nie chybia', 'tarcza, która wszystko odbija', 'zaczarowany flet', 'magiczna harfa', 'cudowny pierścień', 'amulet chroniący przed złem', 'talizman przynoszący szczęście', 'kryształ przewidywania', 'kamień filozoficzny', 'dywan, który czyta w myślach', 'okulary pozwalające widzieć przez ściany', 'rękawice dające super siłę', 'perfumy zmieniające nastrój', 'aparat fotografujący marzenia', 'grzebień, który prostuje kręte ścieżki', 'łyżka, która sprawia, że każda zupa jest pyszna', 'poduszka, która gwarantuje piękne sny', 'sznurowadła, które nigdy się nie rozwiązują', 'długopis, który nigdy się nie wypisuje', 'książka, której historia zmienia się za każdym razem', 'farby, które malują ruchome obrazy', 'nożyczki, które potrafią przeciąć zmartwienia', 'klej, który potrafi skleić złamane serce', 'chmura, którą można schować do kieszeni', 'gwiazda, którą można komuś podarować', 'kieszonkowa tęcza', 'słoik pełen śmiechu', 'muzyka, którą można zobaczyć', 'smak, który można usłyszeć', 'zapach, który można dotknąć', 'słowo, które leczy', 'uśmiech, który rozjaśnia mrok', 'pomysł, który zmienia świat', 'marzenie, które się spełnia', 'wspomnienie, które ogrzewa', 'nadzieja, która dodaje skrzydeł', 'miłość, która zwycięża wszystko', 'przyjaźń, która trwa wiecznie', 'odwaga, która pokonuje strach', 'mądrość, która wskazuje drogę', 'szczęście, które można znaleźć wszędzie', 'przygoda, która czeka za rogiem', 'tajemnica, którą trzeba odkryć', 'zagadka, którą trzeba rozwiązać', 'cel, który trzeba osiągnąć', 'droga, którą trzeba przejść', 'wyzwanie, któremu trzeba sprostać', 'przeszkoda, którą trzeba pokonać', 'trudność, z którą trzeba się zmierzyć' ];

document.addEventListener('DOMContentLoaded', () => {
    // === WAŻNE: Wstaw tutaj swój adres URL z Cloudflare! ===
    const SCRIPT_URL = 'https://red-band-530b.mientos90.workers.dev';

    const generateBtn = document.getElementById('generateBtn');
    const loadingDiv = document.getElementById('loading');
    const resultDiv = document.getElementById('result');
    const storyTitleEl = document.getElementById('storyTitle');
    const storyContentEl = document.getElementById('storyContent');

    // NOWE ELEMENTY - SEKCJA I PRZYCISK AUDIO
    const audioSection = document.getElementById('audio-section');
    const readAloudBtn = document.getElementById('readAloudBtn');

    // Zmienna do przechowywania pełnego tekstu bajki dla lektora
    let currentStoryText = '';

    const handleGenerateClick = async () => {
        // Zatrzymujemy ewentualne odtwarzanie poprzedniej bajki
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
        }

        const childName = document.getElementById('childName').value.trim();
        const animalHelper = document.getElementById('animalHelper').value.trim();
        const magicPlace = document.getElementById('magicPlace').value.trim();
        const magicItem = document.getElementById('magicItem').value.trim();

        if (!childName || !animalHelper || !magicPlace || !magicItem) {
            alert('Proszę wypełnić wszystkie pola!');
            return;
        }

        resultDiv.classList.add('hidden');
        audioSection.classList.add('hidden'); // Ukrywamy przycisk audio
        loadingDiv.classList.remove('hidden');
        generateBtn.disabled = true;
        generateBtn.textContent = "Tworzę magię...";

        try {
            const payload = { childName, animalHelper, magicPlace, magicItem };
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ error: `Błąd serwera: ${response.status}` }));
                throw new Error(errorData.error || `Nieznany błąd: ${response.statusText}`);
            }

            const data = await response.json();
            if (data.error) throw new Error(data.error);

            // Zapisujemy cały tekst bajki (razem z tytułem) do zmiennej
            currentStoryText = data.story.replace(/[\*#]/g, ''); // Usuwamy znaki formatowania markdown

            const storyParts = data.story.split('\n');
            const title = storyParts.shift().replace(/[\*#]/g, '');
            const content = storyParts.join('<br>');

            storyTitleEl.textContent = title;
            storyContentEl.innerHTML = content;
            resultDiv.classList.remove('hidden');

            // Pokazujemy sekcję z przyciskiem do odsłuchania
            if (currentStoryText && 'speechSynthesis' in window) {
                audioSection.classList.remove('hidden');
                readAloudBtn.textContent = "Odsłuchaj Bajkę! 🎧"; // Resetujemy tekst przycisku
            }

        } catch (error) {
            console.error('Błąd:', error);
            alert(`Wystąpił błąd: ${error.message}`);
        } finally {
            loadingDiv.classList.add('hidden');
            generateBtn.disabled = false;
            generateBtn.textContent = "Stwórz kolejną bajkę!";
        }
    };
    
    // NOWA FUNKCJA DO OBSŁUGI CZYTANIA NA GŁOS
    const handleReadAloudClick = () => {
        if (!currentStoryText || !('speechSynthesis' in window)) {
            alert("Twoja przeglądarka nie obsługuje odczytywania tekstu na głos.");
            return;
        }

        // Jeśli lektor właśnie mówi, zatrzymujemy go
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
            readAloudBtn.textContent = "Odsłuchaj Bajkę! 🎧";
            return;
        }

        // Tworzymy nową wypowiedź
        const utterance = new SpeechSynthesisUtterance(currentStoryText);
        utterance.lang = 'pl-PL'; // Ustawiamy język polski - kluczowe dla poprawnej wymowy!
        utterance.rate = 0.95; // Można delikatnie zwolnić tempo czytania
        utterance.pitch = 1.1; // Można lekko podnieść ton głosu

        // Gdy czytanie się zakończy, zresetuj tekst przycisku
        utterance.onend = () => {
            readAloudBtn.textContent = "Odsłuchaj Bajkę! 🎧";
        };

        // Zmieniamy tekst przycisku i uruchamiamy czytanie
        readAloudBtn.textContent = "Zatrzymaj czytanie ⏹️";
        window.speechSynthesis.speak(utterance);
    };

    const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
    
    const randomAnimalBtn = document.getElementById('randomAnimalBtn');
    const randomPlaceBtn = document.getElementById('randomPlaceBtn');
    const randomItemBtn = document.getElementById('randomItemBtn');

    if (randomAnimalBtn) randomAnimalBtn.addEventListener('click', (e) => { e.preventDefault(); document.getElementById('animalHelper').value = getRandomElement(randomAnimals); });
    if (randomPlaceBtn) randomPlaceBtn.addEventListener('click', (e) => { e.preventDefault(); document.getElementById('magicPlace').value = getRandomElement(randomPlaces); });
    if (randomItemBtn) randomItemBtn.addEventListener('click', (e) => { e.preventDefault(); document.getElementById('magicItem').value = getRandomElement(randomItems); });

    if (generateBtn) generateBtn.addEventListener('click', handleGenerateClick);
    
    // Dodajemy nasłuchiwanie na przycisk odczytywania
    if (readAloudBtn) readAloudBtn.addEventListener('click', handleReadAloudClick);
});
