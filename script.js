// Skopiuj całą zawartość pliku script.js z poprzedniej wiadomości (tej z płatnym Stability AI). 
// Nie wymaga on żadnych zmian.
/* ... */
document.addEventListener('DOMContentLoaded', () => {
    const MOTIVATION_IDEAS = [ /* ... */ ];
    const REALM_IDEAS = [ /* ... */ ];
    const GUARDIAN_IDEAS = [ /* ... */ ];
    const backgroundMusicPlaylist = [ /* ... */ ];
    /* Skopiuj całe definicje list i playlist z działającej wersji */
    /* ... */
    const MOTIVATION_IDEAS = [ 'odnaleźć zagubioną melodię wiatru', 'oddać gwiazdę, która spadła z nieba', 'naprawić zepsuty zegar księżycowy', 'zrozumieć, dlaczego rzeka przestała szeptać', 'znaleźć lekarstwo dla chorego przyjaciela', 'odkryć, co znajduje się na ostatniej stronie pustej książki', 'zebrać najrzadsze kolory do namalowania wschodu słońca', 'nauczyć się języka ptaków', 'odszukać źródło magicznego echa', 'zbudować most z tęczy', 'uratować las przed Cichą Mgłą', 'znaleźć zagubiony śmiech królewny', 'odkryć tajemnicę znikających snów', 'dostarczyć list do Króla Chmur', 'posadzić drzewo, które rodzi świetliste owoce', 'odczarować kamiennego olbrzyma', 'dowiedzieć się, gdzie nocą wędrują cienie', 'odnaleźć nasiono śpiewającego kwiatu', 'zwrócić morzu skradzioną falę', 'przynieść słońce do krainy wiecznej zimy', 'odnaleźć mapę do Krainy Nigdy-Nigdy', 'zrozumieć, co smuci starego ducha lasu', 'zebrać łzy feniksa, by uleczyć króla', 'odszukać zaginioną bibliotekę szeptów', 'naprawić pęknięte serce golema', 'oddać księżycowi jego odbicie z kałuży', 'stworzyć latarnię, która świeci nadzieją', 'odkryć, kto maluje poranną rosę', 'odnaleźć klucz do pozytywki grającej wspomnienia', 'uwolnić duszki uwięzione w bursztynie', 'zbudować statek, który potrafi pływać po niebie', 'odszukać zaginiony kolor – indygo', 'pokonać własny strach przed ciemnością', 'przeprosić gnomy za zdeptany muchomor', 'odnaleźć przepis na zupę z chmur', 'zrozumieć mowę kamieni', 'oddać wiatrowi jego zagubione piosenki', 'zebrać wszystkie zagubione guziki świata', 'znaleźć okulary dla krótkowzrocznego smoka', 'odbudować zamek z piasku przed przypływem', 'nauczyć tańczyć nieśmiałe choinki', 'znaleźć ostatnią rymowankę do kołysanki', 'pomóc słońcu wstać, gdy zaspało', 'odszukać wyspę, na której czas płynie wolniej', 'napisać list do kogoś, kto mieszka w lustrze', 'oddać echo jego prawdziwemu głosowi', 'odkryć, dlaczego kwiaty zamykają się na noc', 'przynieść wodę do wyschniętego strumienia', 'złapać spadający sen i go spełnić'];
    const REALM_IDEAS = [ 'Szeptunowy Las, gdzie drzewa znają sekrety', 'Miasto Zwisających Zegarów, gdzie czas płynie inaczej', 'Kryształowe Bagna, które lśnią w świetle księżyca', 'Zapomniane Poddasze, gdzie kurz pamięta dawne historie', 'Archipelag Latających Wysp, połączonych tęczowymi mostami', 'Podziemna Biblioteka, w której książki same opowiadają historie', 'Dolina Porcelanowych Dzwonków', 'Szklana Pustynia, gdzie fatamorgany są prawdziwe', 'Kraina Odwróconych Wodospadów', 'Miasto z Piernika, strzeżone przez lukrowych rycerzy', 'Las, w którym rosną latarnie zamiast drzew', 'Podniebne Królestwo Ptaków', 'Zatopione Miasto Dzwonów', 'Ogród, w którym kwiaty świecą w nocy', 'Kraina Wiecznej Jesieni', 'Góry Szeptów i Ech', 'Kolebka Chmur, gdzie rodzi się deszcz', 'Marmurowy Labirynt Czasu', 'Wyspa Zapomnianych Zabawek', 'Równina Atramentowych Rzek', 'Królestwo Utkane z Pajęczej Nici', 'Miasto Mechanicznych Cudów', 'Cukierkowy Las', 'Kraina, gdzie góry są z książek', 'Dolina Śpiących Olbrzymów', 'Lodowe Ogrody Królowej Zimy', 'Kraina Snów na Jawie', 'Wąwóz Zagubionych Myśli', 'Królestwo Podziemnych Jezior', 'Miasto zbudowane na grzbiecie wielkiego żółwia', 'Las, w którym drzewa mają srebrne liście', 'Kraina, gdzie gwiazdy można zbierać jak jagody', 'Port Mglistych Tajemnic', 'Ciche Wzgórza Melancholii', 'Królestwo, w którym wszystko jest do góry nogami', 'Pola Szklanych Maków', 'Jaskinia Kryształowych Szeptów', 'Miasto Zbudowane z Nut', 'Kraina, gdzie cienie żyją własnym życiem', 'Tęczowe Mokradła', 'Dolina Skamieniałych Opowieści', 'Las, w którym zamiast deszczu padają litery', 'Królestwo Zwierciadeł', 'Wyspa, na której rosną drzewa śmiechu', 'Góry, które oddychają', 'Miasto na Chmurze', 'Labirynt z żywopłotu, który zmienia kształt', 'Kraina, gdzie wspomnienia rosną na drzewach', 'Podwodny las wodorostów'];
    const GUARDIAN_IDEAS = [ 'stary golem z mchu, który strzeże zapomnianych ścieżek', 'chytry lis w cylindrze, który handluje zagadkami', 'ostatni smok, który zieje bańkami mydlanymi pełnymi wspomnień', 'mechaniczny słowik, który zna wszystkie pieśni przeszłości i przyszłości', 'nieśmiały duch studni, który mówi tylko szeptem', 'niewidzialny kot, którego można dostrzec tylko po jego uśmiechu', 'mądra sowa w okularach, która jest bibliotekarzem', 'kamienny lew, który ożywa o zmierzchu', 'mała wróżka, która maluje skrzydła motylom', 'gadatliwe drzewo, które opowiada historie każdemu, kto usiądzie w jego cieniu', 'olbrzym, który nosi na plecach całą wioskę', 'skrzat, który kolekcjonuje zagubione guziki', 'strażnik mostu, który przepuszcza tylko tych, co rozśmieszą go do łez', 'feniks, który odradza się z popiołów smutku', 'wilk, który nauczył się grać na flecie', 'syrena, która zamiast śpiewać, opowiada najlepsze dowcipy', 'goblin-wynalazca, którego maszyny zawsze wybuchają śmiechem', 'duch starego latarnika morskiego', 'smutny troll, który strzeże jaskini pełnej skarbów, ale pragnie tylko przyjaciela', 'tańczący niedźwiedź, który zna drogę przez najgęstszy las', 'centaur-astronom, który czyta przyszłość z gwiazd', 'krasnoludzki kowal, który wykuwa sny', 'elf, który potrafi rozmawiać z roślinami', 'wąż, którego łuski są jak strony z księgi czarów', 'pająk, który tka mapy z srebrnej nici', 'gryf, który strzeże górskiego szczytu', 'kobieta-księżyc, która schodzi na ziemię raz w miesiącu', 'chłopiec, który potrafi zamieniać łzy w perły', 'strażnik czasu, który drzemie w starej wieży zegarowej', 'kameleon, który potrafi stać się niewidzialny, gdy jest zawstydzony', ' borsuk-erudyta, który prowadzi podziemną herbaciarnię', 'kapitan statku-widmo, który szuka zaginionego portu', 'rycerz w zbroi z porcelany, który boi się pęknięć', 'czarodziej, który zapomniał swoich najpotężniejszych zaklęć', 'strażniczka ogrodu, która pielęgnuje kwiaty o ludzkich uczuciach', 'mól książkowy, który zjada tylko nudne historie', 'duch lustra, który pokazuje tylko prawdę', 'wiewiórka, która jest królową całego lasu', 'żaba, która nosi koronę i czeka na obietnicę, a nie pocałunek', 'jednorożec, który stracił swój róg i szuka go w ludzkich sercach', 'królik, który jest posłańcem między światem snów a jawą', 'golem zrobiony z chmur, który zmienia kształt z każdym podmuchem wiatru', 'strażnik rzeki, który pozwala przejść w zamian za ciekawą opowieść', 'mały robaczek świętojański, który jest najjaśniejszą latarnią w najciemniejszą noc', 'skrzydlaty kot, który przynosi wiadomości z dachów świata', 'grzyb, który potrafi mówić, ale tylko w deszczowe dni', 'srebrna lisica, która prowadzi wędrowców światłem swojego ogona', 'duch starego zegarmistrza, który potrafi cofnąć czas o minutę'];
    const backgroundMusicPlaylist = [];
    backgroundMusicPlaylist.push(
        'https://cdn.pixabay.com/download/audio/2024/09/22/audio_6a4d382fe6.mp3', 
        'https://cdn.pixabay.com/download/audio/2024/08/06/audio_81f51dde6c.mp3', 
        'https://cdn.pixabay.com/download/audio/2024/12/18/audio_e07679a5ce.mp3',  
        'https://cdn.pixabay.com/download/audio/2025/04/27/audio_835501c0f8.mp3', 
        'https://cdn.pixabay.com/download/audio/2025/05/09/audio_0192877465.mp3', 
        'https://cdn.pixabay.com/download/audio/2025/05/09/audio_3fb7eb81be.mp3'
    );
    const SCRIPT_URL = 'https://red-band-530b.mientos90.workers.dev';
    const formSection = document.getElementById('form-section');
    const generateBtn = document.getElementById('generateBtn');
    const storyContainer = document.getElementById('story-container');
    const storyTitleEl = document.getElementById('storyTitle');
    const storyContentEl = document.getElementById('storyContent');
    const readAloudBtn = document.getElementById('readAloudBtn');
    const expandStoryBtn = document.getElementById('expandStoryBtn');
    const imageContainer = document.getElementById('image-container');
    const storyImage1 = document.getElementById('storyImage1');
    const storyImage2 = document.getElementById('storyImage2');
    const entryOverlay = document.getElementById('entry-overlay');
    const enterBtn = document.getElementById('enterBtn');
    const childNameInput = document.getElementById('childName');
    const motivationInput = document.getElementById('motivationInput');
    const realmInput = document.getElementById('realmInput');
    const guardianInput = document.getElementById('guardianInput');
    const storyStyleSelect = document.getElementById('storyStyle');
    const storyLengthSelect = document.getElementById('storyLength');
    const ageCategorySelect = document.getElementById('ageCategory');
    const randomMotivationBtn = document.getElementById('randomMotivationBtn');
    const randomRealmBtn = document.getElementById('randomRealmBtn');
    const randomGuardianBtn = document.getElementById('randomGuardianBtn');
    const backgroundMusicPlayer = document.getElementById('backgroundMusicPlayer');
    const toggleMusicBtn = document.getElementById('toggleMusicBtn');
    const voiceVolumeSlider = document.getElementById('voiceVolume');
    const musicVolumeSlider = document.getElementById('musicVolume');
    let voicePlayer = null;
    let currentAudioBase64 = null;
    let isStoryVisible = false;
    let originalInputs = null;
    let currentRawStoryText = null;
    let currentStoryStyle = null;
    let imageGeneratorInterval = null;
    let activeImageElement = storyImage1;
    let inactiveImageElement = storyImage2;
    const randomIndex = Math.floor(Math.random() * backgroundMusicPlaylist.length);
    backgroundMusicPlayer.src = backgroundMusicPlaylist[randomIndex];
    backgroundMusicPlayer.volume = parseFloat(musicVolumeSlider.value);
    backgroundMusicPlayer.load();
    const stopCurrentAudio = (resetButton = true) => {
        if (voicePlayer) { voicePlayer.pause(); voicePlayer = null; }
        if (imageGeneratorInterval) clearInterval(imageGeneratorInterval);
        if (resetButton) {
            readAloudBtn.querySelector('.btn-text').textContent = "Odsłuchaj Opowieść";
            readAloudBtn.disabled = false;
        }
    };
    const setButtonLoadingState = (button, isLoading) => {
        const btnText = button.querySelector('.btn-text');
        const spinnerContainer = button.querySelector('.spinner-container');
        button.disabled = isLoading;
        if (btnText) btnText.classList.toggle('hidden', isLoading);
        if (spinnerContainer) spinnerContainer.classList.toggle('hidden', !isLoading);
    };
    const typewriterEffect = (element, htmlString, callback) => {
        // ... (skopiuj całą funkcję bez zmian)
    };
    const setRandomValue = (inputElement, ideasArray) => {
        const randomIndex = Math.floor(Math.random() * ideasArray.length);
        inputElement.value = ideasArray[randomIndex];
    };
    const resetToFormView = () => {
        stopCurrentAudio();
        isStoryVisible = false;
        originalInputs = null;
        currentRawStoryText = null;
        currentStoryStyle = null;
        storyContainer.classList.add('hidden');
        imageContainer.classList.add('hidden');
        expandStoryBtn.classList.add('hidden'); 
        formSection.style.display = 'block';
        childNameInput.value = '';
        motivationInput.value = '';
        realmInput.value = '';
        guardianInput.value = '';
        setButtonLoadingState(generateBtn, false);
        generateBtn.querySelector('.btn-text').textContent = 'Stwórz Moją Bajkę';
    };
    const updateStoryContent = (data) => {
        const rawStory = data.story.trim();
        const storyParts = rawStory.split('\n');
        const title = storyParts.shift().replace(/[\*#]/g, '').trim();
        let content = storyParts.filter(line => line.trim() !== '').join('<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        storyTitleEl.textContent = title;
        currentAudioBase64 = data.audioBase64;
        currentRawStoryText = data.story;
        currentStoryStyle = data.style;
        typewriterEffect(storyContentEl, content);
        storyTitleEl.scrollIntoView({ behavior: 'smooth' });
    };
    async function fetchAndDisplayImage() {
        if (!currentRawStoryText || !currentStoryStyle) return;
        const sentences = currentRawStoryText.replace(/\*\*|AKT [I-III]:/g, '').split(/[.!?]/).filter(s => s.trim().length > 50);
        const sceneDescription = sentences[Math.floor(Math.random() * sentences.length)];
        if (!sceneDescription) return;
        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'generateImage',
                    sceneDescription: sceneDescription,
                    style: currentStoryStyle
                })
            });
            if (!response.ok) throw new Error("Błąd generowania obrazu");
            const data = await response.json();
            inactiveImageElement.src = `data:image/jpeg;base64,${data.imageBase64}`;
            inactiveImageElement.classList.add('visible');
            activeImageElement.classList.remove('visible');
            [activeImageElement, inactiveImageElement] = [inactiveImageElement, activeImageElement];
        } catch (error) {
            console.error("Błąd Ilustratora Snów:", error);
        }
    }
    const startImageGenerator = () => {
        if (imageGeneratorInterval) clearInterval(imageGeneratorInterval);
        imageContainer.classList.remove('hidden');
        fetchAndDisplayImage();
        imageGeneratorInterval = setInterval(fetchAndDisplayImage, 20000); // Zwiększono interwał do 20s
    };
    const handleReadAloudClick = () => {
        if (voicePlayer && !voicePlayer.paused) {
            stopCurrentAudio();
            return;
        }
        if (!currentAudioBase64) return;
        voicePlayer = new Audio(`data:audio/mp3;base64,${currentAudioBase64}`);
        voicePlayer.volume = parseFloat(voiceVolumeSlider.value);
        readAloudBtn.querySelector('.btn-text').textContent = "Słucham...";
        readAloudBtn.disabled = true;
        voicePlayer.play().then(() => {
            readAloudBtn.disabled = false;
            startImageGenerator();
        }).catch(error => { 
            console.error("Błąd odtwarzania głosu:", error); 
            stopCurrentAudio(); 
        });
        voicePlayer.addEventListener('ended', () => stopCurrentAudio(true));
    };
    const executeGeneration = async () => {
        const inputs = {
            action: 'generate',
            childName: childNameInput.value.trim(),
            motivation: motivationInput.value.trim(),
            realm: realmInput.value.trim(),
            guardian: guardianInput.value.trim(),
            style: storyStyleSelect.value,
            storyLength: storyLengthSelect.value,
            ageCategory: ageCategorySelect.value
        };
        if (!inputs.childName) { alert('Proszę podać imię głównego bohatera!'); return; }
        if (!inputs.motivation || !inputs.realm || !inputs.guardian) { alert('Proszę wypełnić wszystkie pola fabuły lub użyć przycisku losowania!'); return; }
        setButtonLoadingState(generateBtn, true);
        generateBtn.querySelector('.btn-text').textContent = "Tworzę magię...";
        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST', mode: 'cors', cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputs)
            });
            if (!response.ok) throw new Error(`Błąd serwera: ${response.status} ${await response.text()}`);
            const data = await response.json();
            if (data.error) throw new Error(data.error);
            originalInputs = inputs; 
            updateStoryContent(data);
            formSection.style.display = 'none';
            storyContainer.classList.remove('hidden');
            expandStoryBtn.classList.remove('hidden'); 
            isStoryVisible = true;
            generateBtn.querySelector('.btn-text').textContent = 'Stwórz Nową Opowieść';
        } catch (error) {
            console.error('Błąd:', error);
            alert(`Wystąpił błąd podczas tkania magii: ${error.message}`);
        } finally {
            setButtonLoadingState(generateBtn, false);
        }
    };
    const handleExpandStory = async () => {
        if (!currentRawStoryText || !originalInputs) return;
        setButtonLoadingState(expandStoryBtn, true);
        stopCurrentAudio();
        const payload = {
            action: 'expand',
            storyText: currentRawStoryText,
            style: originalInputs.style
        };
        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST', mode: 'cors', cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) throw new Error(`Błąd serwera: ${response.status} ${await response.text()}`);
            const data = await response.json();
            if (data.error) throw new Error(data.error);
            updateStoryContent(data);
            expandStoryBtn.classList.add('hidden');
        } catch (error) {
            console.error('Błąd podczas rozwijania historii:', error);
            alert(`Wystąpił błąd podczas rozwijania opowieści: ${error.message}`);
        } finally {
            setButtonLoadingState(expandStoryBtn, false);
        }
    };
    enterBtn.addEventListener('click', () => {
        entryOverlay.classList.add('open');
        backgroundMusicPlayer.play().catch(e => console.warn("Autoodtwarzanie muzyki zablokowane."));
        toggleMusicBtn.classList.add('is-playing');
        toggleMusicBtn.title = "Wyłącz muzykę w tle";
        setTimeout(() => { entryOverlay.style.display = 'none'; }, 2600);
    });
    generateBtn.addEventListener('click', () => { isStoryVisible ? resetToFormView() : executeGeneration(); });
    readAloudBtn.addEventListener('click', handleReadAloudClick);
    expandStoryBtn.addEventListener('click', handleExpandStory);
    toggleMusicBtn.addEventListener('click', () => {
        if (backgroundMusicPlayer.paused) {
            backgroundMusicPlayer.play();
            toggleMusicBtn.classList.add('is-playing');
        } else {
            backgroundMusicPlayer.pause();
            toggleMusicBtn.classList.remove('is-playing');
        }
    });
    musicVolumeSlider.addEventListener('input', () => { backgroundMusicPlayer.volume = parseFloat(musicVolumeSlider.value); });
    voiceVolumeSlider.addEventListener('input', () => { if (voicePlayer) voicePlayer.volume = parseFloat(voiceVolumeSlider.value); });
    randomMotivationBtn.addEventListener('click', () => setRandomValue(motivationInput, MOTIVATION_IDEAS));
    randomRealmBtn.addEventListener('click', () => setRandomValue(realmInput, REALM_IDEAS));
    randomGuardianBtn.addEventListener('click', () => setRandomValue(guardianInput, GUARDIAN_IDEAS));
});
