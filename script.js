document.addEventListener('DOMContentLoaded', () => {
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
    const readAloudBtn = document.getElementById('readAloudBtn');
    const backgroundMusicPlayer = document.getElementById('backgroundMusicPlayer');
    const toggleMusicBtn = document.getElementById('toggleMusicBtn');
    const voiceVolumeSlider = document.getElementById('voiceVolume');
    const musicVolumeSlider = document.getElementById('musicVolume');
    const btnText = generateBtn.querySelector('.btn-text');
    const spinnerContainer = generateBtn.querySelector('.spinner-container');
    
    // NOWE POLA FORMULARZA
    const childNameInput = document.getElementById('childName');
    const motivationSelect = document.getElementById('motivation');
    const realmSelect = document.getElementById('realm');
    const guardianSelect = document.getElementById('guardian');
    const storyStyleSelect = document.getElementById('storyStyle');
    const ageCategorySelect = document.getElementById('ageCategory');

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

    // --- Funkcje pomocnicze ---
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
        childNameInput.value = '';
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
            if (skipTypewriterHandler) document.removeEventListener('click', skipTypewriterHandler);
            if (callback) callback();
        };
        skipTypewriterHandler = () => completeAnimation();
        setTimeout(() => { if (typewriterInterval) document.addEventListener('click', skipTypewriterHandler, { once: true }); }, 50);
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
            childName: childNameInput.value.trim(),
            motivation: motivationSelect.value,
            realm: realmSelect.value,
            guardian: guardianSelect.value,
            style: storyStyleSelect.value,
            ageCategory: ageCategorySelect.value
        };

        if (!inputs.childName) {
            alert('Proszę podać imię głównego bohatera!');
            return;
        }
        
        setLoadingState(true);

        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST', mode: 'cors', cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputs)
            });
            if (!response.ok) throw new Error(`Błąd serwera: ${response.status} ${await response.text()}`);
            
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
        backgroundMusicPlayer.play().catch(e => console.warn("Autoodtwarzanie muzyki zablokowane."));
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
});
