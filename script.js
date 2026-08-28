
const startButton = document.getElementById("startButton");
const hero = document.querySelector(".hero");


// ==========================================
// ПЕРЕХОД КО ВТОРОЙ СЦЕНЕ
// ==========================================

startButton.addEventListener("click", () => {

    // Небольшая анимация кнопки
    startButton.style.transform = "scale(0.95)";
    startButton.style.boxShadow =
        "0 0 40px rgba(255, 130, 190, 0.5)";


    // Через небольшой момент
    // начинаем исчезновение первой сцены

    setTimeout(() => {

        hero.style.transition =
            "opacity 1.2s ease, transform 1.2s ease";

        hero.style.opacity = "0";

        hero.style.transform =
            "translateY(-20px)";

    }, 300);


    // После исчезновения создаём вторую сцену

    setTimeout(() => {

        hero.remove();

        createSecondScene();

    }, 1500);

});


// ==========================================
// СОЗДАНИЕ ВТОРОЙ СЦЕНЫ
// ==========================================

function createSecondScene() {

    const scene = document.createElement("main");

    scene.classList.add("second-scene");


    scene.innerHTML = `

        <div class="date">
            24.05.2026
        </div>

        <h2>
            Иногда совершенно обычный день
            становится началом
            <span>чего-то необычного.</span>
        </h2>

        <p>
            Именно тогда началась наша история.
        </p>

        <button id="nextButton">
            Дальше <span>→</span>
        </button>

    `;


    document.body.appendChild(scene);


    // Плавное появление второй сцены

    setTimeout(() => {

        scene.classList.add("show");

    }, 100);


    // Кнопка следующей сцены

    const nextButton =
        document.getElementById("nextButton");


nextButton.addEventListener("click", () => {

    transitionToThirdScene();

});

}



function transitionToThirdScene() {

    const scene =
        document.querySelector(".second-scene");


    // Исчезновение второй сцены

    scene.style.opacity = "0";

    scene.style.transform =
        "translateY(-25px)";


    // После исчезновения
    // создаём третью сцену

    setTimeout(() => {

        scene.remove();

        createThirdScene();

    }, 1200);

}


// ==========================================
// ТРЕТЬЯ СЦЕНА
// ==========================================

function createThirdScene() {

    const scene =
        document.createElement("main");


    scene.classList.add("third-scene");


    scene.innerHTML = `

        <div class="third-content">

            <div class="third-date">
                24.05.2026
            </div>


            <h2>
                Всё началось<br>
                <span>с одной страницы в TikTok.</span>
            </h2>


            <p class="story-text">

                Ты просто появилась у меня
                в рекомендациях.

                <br><br>

                Я увидел тебя
                и почему-то задержался
                на этой странице
                чуть дольше, чем обычно.

            </p>


            <div class="message">

                <span>А потом...</span>

                <strong>
                    я решился написать тебе.
                </strong>

            </div>


            <!-- Место для будущего скриншота -->

            <div class="chat-placeholder">

    <img 
        src="images/first.jpg" 
        alt="Наша первая переписка"
        class="chat-image"
    >

</div>

            <button id="thirdNextButton">

                Дальше
                <span>→</span>

            </button>

        </div>

    `;


    document.body.appendChild(scene);


    // Запускаем появление

    setTimeout(() => {

        scene.classList.add("show");

    }, 100);


    // Следующая сцена

    const thirdNextButton =
        document.getElementById(
            "thirdNextButton"
        );


thirdNextButton.addEventListener(
    "click",
    () => {

        transitionToFourthScene();

    }
);

}


// ==========================================
// ПЕРЕХОД К ЧЕТВЁРТОЙ СЦЕНЕ
// ==========================================

function transitionToFourthScene() {

    const scene =
        document.querySelector(".third-scene");


    // Исчезновение третьей сцены

    scene.style.opacity = "0";

    scene.style.transform =
        "translateY(-25px)";


    setTimeout(() => {

        scene.remove();

        createFourthScene();

    }, 1200);

}


function createFourthScene() {

    const scene =
        document.createElement("main");


    scene.classList.add("fourth-scene");


    scene.innerHTML = `

        <div class="fourth-glow"></div>


        <div class="fourth-content">


            <div class="question">
                Знаешь, что самое интересное?
            </div>


            <p class="fourth-text first-text">
                В тот момент я просто хотел
                познакомиться.
            </p>


            <p class="fourth-text second-text">
                Я даже не представлял,
                куда приведёт
                <span>одно сообщение.</span>
            </p>


            <div class="beginning">
                Но это было только начало.
            </div>


            <button id="fourthNextButton">

                Продолжить
                <span>→</span>

            </button>


        </div>

    `;


    document.body.appendChild(scene);


    // Появление сцены

    setTimeout(() => {

        scene.classList.add("show");

    }, 100);


    // Следующая сцена

    const fourthNextButton =
        document.getElementById(
            "fourthNextButton"
        );


fourthNextButton.addEventListener(
    "click",
    () => {

        transitionToFifthScene();

    }
);

};

// ==========================================
// ПЕРЕХОД К ПЯТОЙ СЦЕНЕ
// ==========================================

function transitionToFifthScene() {

    const scene =
        document.querySelector(".fourth-scene");


    scene.style.opacity = "0";

    scene.style.transform =
        "scale(1.02)";


    setTimeout(() => {

        scene.remove();

        createFifthScene();

    }, 1300);

}


// ==========================================
// ПЯТАЯ СЦЕНА
// ==========================================

function createFifthScene() {

    const scene =
        document.createElement("main");


    scene.classList.add("fifth-scene");


    scene.innerHTML = `

        <!-- Гирлянда -->

        <div class="lights">

            <div class="wire"></div>

            <div class="bulb bulb-1"></div>
            <div class="bulb bulb-2"></div>
            <div class="bulb bulb-3"></div>
            <div class="bulb bulb-4"></div>
            <div class="bulb bulb-5"></div>
            <div class="bulb bulb-6"></div>
            <div class="bulb bulb-7"></div>
            <div class="bulb bulb-8"></div>

        </div>


        <!-- Основной контент -->

        <div class="fifth-content">

            <div class="fifth-label">
                OUR STORY · 01
            </div>


            <h2>
                Наши
                <span>моменты.</span>
            </h2>


            <p class="fifth-intro">

                А потом появились моменты,
                которые захотелось сохранить.

            </p>


            <!-- Будущая фотография -->

<!-- Фотография -->

<div class="fifth-photo">

    <div class="photo-inner">

        <img
            src="images/second.jpg"
            alt="Наш первый кадр"
            class="fifth-image"
        >

    </div>

</div>


            <div class="frame-info">

    <span class="frame-number">
        кадр №01
    </span>

    <span class="frame-caption">
        тот самый момент
    </span>

</div>


            <button id="fifthNextButton">

                Дальше
                <span>→</span>

            </button>

        </div>

    `;


    document.body.appendChild(scene);


    // Появление сцены

    setTimeout(() => {

        scene.classList.add("show");

    }, 100);


    // Следующая сцена

    const fifthNextButton =
        document.getElementById(
            "fifthNextButton"
        );


    fifthNextButton.addEventListener(
    "click",
    () => {

        transitionToSixthScene();

    }
);

}

// ==========================================
// ПЕРЕХОД К ШЕСТОЙ СЦЕНЕ
// ==========================================

function transitionToSixthScene() {

    const scene =
        document.querySelector(".fifth-scene");


    scene.style.opacity = "0";

    scene.style.transform =
        "scale(1.04)";


    setTimeout(() => {

        scene.remove();

        createSixthScene();

    }, 1300);

}



// ==========================================
// ШЕСТАЯ СЦЕНА
// НАШ МАЛЕНЬКИЙ ФИЛЬМ
// ==========================================

function createSixthScene() {

    const scene =
        document.createElement("main");


    scene.classList.add("sixth-scene");


    scene.innerHTML = `

        <!-- ==================================
             ГИРЛЯНДА
        ================================== -->

        <div class="lights">

            <div class="wire"></div>

            <div class="bulb bulb-1"></div>
            <div class="bulb bulb-2"></div>
            <div class="bulb bulb-3"></div>
            <div class="bulb bulb-4"></div>
            <div class="bulb bulb-5"></div>
            <div class="bulb bulb-6"></div>
            <div class="bulb bulb-7"></div>
            <div class="bulb bulb-8"></div>

        </div>


        <!-- ==================================
             ОСНОВА
        ================================== -->

        <div class="sixth-content">


            <div class="sixth-label">

                OUR STORY · 02

            </div>


            <h2 class="film-title">

                Наш маленький
                <span>фильм.</span>

            </h2>


            <p class="film-intro">

                Некоторые моменты хочется
                не просто помнить.
                Их хочется сохранить.

            </p>


            <!-- ==================================
                 КИНОПЛЁНКА
            ================================== -->

            <div class="film-window">


                <div class="film-strip">


                    <!-- ФОТО 1 -->

                    <div class="film-frame">

                        <div class="sprocket top"></div>

                        <div class="film-photo">
                            <div class="photo-number">
                                01
                            </div>

                            <div class="photo-placeholder">
    <img src="images/third.jpg" alt="Кадр 01">
</div>
                        </div>

                        <div class="sprocket bottom"></div>

                    </div>


                    <!-- ФОТО 2 -->

                    <div class="film-frame">

                        <div class="sprocket top"></div>

                        <div class="film-photo">

                            <div class="photo-number">
                                02
                            </div>

                            <div class="photo-placeholder">
    <img src="images/fourth.jpg" alt="Кадр 02">
</div>

                        </div>

                        <div class="sprocket bottom"></div>

                    </div>


                    <!-- ФОТО 3 -->

                    <div class="film-frame">

                        <div class="sprocket top"></div>

                        <div class="film-photo">

                            <div class="photo-number">
                                03
                            </div>

                            <div class="photo-placeholder">
    <img src="images/fifth.jpg" alt="Кадр 03">
</div>

                        </div>

                        <div class="sprocket bottom"></div>

                    </div>


                    <!-- ФОТО 4 -->

                    <div class="film-frame">

                        <div class="sprocket top"></div>

                        <div class="film-photo">

                            <div class="photo-number">
                                04
                            </div>

                            <div class="photo-placeholder">
    <img src="images/sixth.jpg" alt="Кадр 04">
</div>

                        </div>

                        <div class="sprocket bottom"></div>

                    </div>


                    <!-- ФОТО 5 -->

                    <div class="film-frame">

                        <div class="sprocket top"></div>

                        <div class="film-photo">

                            <div class="photo-number">
                                05
                            </div>

                            <div class="photo-placeholder">
    <img src="images/seventh.jpg" alt="Кадр 05">
</div>

                        </div>

                        <div class="sprocket bottom"></div>

                    </div>


                    <!-- Дубликаты для бесконечного движения -->

                    <div class="film-frame">

                        <div class="sprocket top"></div>

                        <div class="film-photo">

                            <div class="photo-number">
                                01
                            </div>

                            <div class="photo-placeholder">
    <img src="images/third.jpg" alt="Кадр 01">
</div>

                        </div>

                        <div class="sprocket bottom"></div>

                    </div>


                    <div class="film-frame">

                        <div class="sprocket top"></div>

                        <div class="film-photo">

                            <div class="photo-number">
                                02
                            </div>

                            <div class="photo-placeholder">
    <img src="images/fourth.jpg" alt="Кадр 02">
</div>

                        </div>

                        <div class="sprocket bottom"></div>

                    </div>


                    <div class="film-frame">

                        <div class="sprocket top"></div>

                        <div class="film-photo">

                            <div class="photo-number">
                                03
                            </div>

                            <div class="photo-placeholder">
    <img src="images/fifth.jpg" alt="Кадр 03">
</div>

                        </div>

                        <div class="sprocket bottom"></div>

                    </div>


                </div>

            </div>


            <!-- ==================================
                 ПОДПИСЬ
            ================================== -->

            <div class="film-caption">

                <div class="film-number">
                    КАДР №01
                </div>


                <p>
                    тот самый момент,
                    который хочется сохранить.
                </p>

            </div>


            <button id="sixthNextButton">

                Дальше
                <span>→</span>

            </button>


        </div>

    `;


    document.body.appendChild(scene);


    // Появление

    setTimeout(() => {

        scene.classList.add("show");

    }, 100);


 // ==========================================
// ПЕРЕХОД К 7-Й СЦЕНЕ
// ==========================================

const sixthNextButton =
    scene.querySelector(
        "#sixthNextButton"
    );


if (sixthNextButton) {

    sixthNextButton.addEventListener(
        "click",
        () => {

            transitionToSeventhScene();

        }
    );

}
}
// ==========================================
// СЕДЬМАЯ СЦЕНА
// ЕСЛИ БЫ МОЖНО БЫЛО ВЕРНУТЬСЯ...
// ==========================================

function createSeventhScene() {

    const scene =
        document.createElement("main");

    scene.classList.add("seventh-scene");

    scene.innerHTML = `

        <div class="seventh-glow"></div>

        <div class="seventh-particles">

            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

        </div>


        <div class="seventh-content">

            <div class="seventh-label">
                CHAPTER · 02
            </div>


            <div class="seventh-question">
                Но знаешь,<br>
                <span>что я понял?</span>
            </div>


            <div class="seventh-answer">

                Я бы снова выбрал<br>
                <span>тот самый первый момент.</span>

            </div>


            <button
                id="seventhNextButton"
                class="seventh-button"
            >

                Почему?

                <span>→</span>

            </button>

        </div>

    `;


    document.body.appendChild(scene);


    // ==========================================
    // ПОЯВЛЕНИЕ
    // ==========================================

    setTimeout(() => {

        scene.classList.add("show");

    }, 100);


    // ==========================================
    // КНОПКА
    // ==========================================

    const button =
        document.getElementById(
            "seventhNextButton"
        );


    button.addEventListener(
        "click",
        () => {

            transitionToEighthScene();

        }
    );

}


// ==========================================
// ПЕРЕХОД К СЕДЬМОЙ СЦЕНЕ
// ==========================================

function transitionToSeventhScene() {

    const scene =
        document.querySelector(".sixth-scene");

    if (!scene) return;


    scene.style.opacity = "0";

    scene.style.transform =
        "scale(1.04)";


    setTimeout(() => {

        scene.remove();

        createSeventhScene();

    }, 1300);

}

// ==========================================
// СЕДЬМАЯ СЦЕНА
// ЕСЛИ БЫ МОЖНО БЫЛО ВЕРНУТЬСЯ...
// ==========================================

function createSeventhScene() {

    // Если сцена уже существует — не создаём вторую
    const oldScene =
        document.querySelector(".seventh-scene");

    if (oldScene) {
        oldScene.remove();
    }


    const scene =
        document.createElement("main");


    scene.classList.add("seventh-scene");


    scene.innerHTML = `

        <!-- Центральное свечение -->

        <div class="seventh-glow"></div>


        <!-- Плавающие частицы -->

        <div class="seventh-particles">

            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

        </div>


        <!-- Основной контент -->

        <div class="seventh-content">


            <div class="seventh-label">

                CHAPTER · 02

            </div>


            <div class="seventh-question">

                Но знаешь,<br>

                <span>
                    что я понял?
                </span>

            </div>


            <div class="seventh-answer">

                Я бы снова выбрал<br>

                <span>
                    тот самый первый момент.
                </span>

            </div>


            <button
                id="seventhNextButton"
                class="seventh-button"
            >

                Почему?

                <span>
                    →
                </span>

            </button>


        </div>

    `;


    // Добавляем сцену на страницу

    document.body.appendChild(scene);


    // ==========================================
    // ПОЯВЛЕНИЕ СЦЕНЫ
    // ==========================================

    setTimeout(() => {

        scene.classList.add("show");

    }, 100);


    // ==========================================
    // КНОПКА
    // ==========================================

    const button =
        document.getElementById(
            "seventhNextButton"
        );


    if (button) {

        button.addEventListener(
            "click",
            () => {

                transitionToEighthScene();

            }
        );

    }

}


// ==========================================
// ПЕРЕХОД С 6-Й НА 7-Ю СЦЕНУ
// ==========================================

function transitionToSeventhScene() {

    const scene =
        document.querySelector(
            ".sixth-scene"
        );


    if (!scene) return;


    // Плавно увеличиваем и затемняем
    scene.style.opacity = "0";

    scene.style.transform =
        "scale(1.04)";


    setTimeout(() => {

        scene.remove();

        createSeventhScene();

    }, 1300);

}


// ==========================================
// КОНЕЦ 7-Й СЦЕНЫ
// ==========================================
//
// ВАЖНО:
// transitionToEighthScene()
// пока должна существовать в коде.
//
// Когда сделаем 8-ю сцену,
// она будет вызываться здесь:
//
// transitionToEighthScene();
//
// ==========================================


// ==========================================
// ВОСЬМАЯ СЦЕНА
// 100 ПРИЧИН, ПОЧЕМУ Я ТЕБЯ ЛЮБЛЮ
// ==========================================

function createEighthScene() {

    const scene = document.createElement("main");

    scene.classList.add("eighth-scene");

    const reasons = [

        "За твою улыбку, которая способна изменить мой день.",

        "За то, как ты умеешь делать обычные моменты особенными.",

        "За твой взгляд, в котором хочется задержаться.",

        "За твою доброту, которую не всегда замечают другие.",

        "За твою нежность.",

        "За твой смех, который хочется слышать снова и снова.",

        "За то, как рядом с тобой становится спокойно.",

        "За твою искренность.",

        "За то, что с тобой хочется быть собой.",

        "За каждую нашу маленькую историю.",

        "За твой характер.",

        "За твою красоту, которую невозможно описать одним словом.",

        "За то, как ты умеешь удивлять меня.",

        "За твои сообщения, которые иногда заставляют улыбаться без причины.",

        "За твоё «как ты?».",

        "За то, что мне хочется рассказывать тебе даже самые мелкие вещи.",

        "За твоё присутствие в моей жизни.",

        "За то, что ты стала для меня особенной.",

        "За твои маленькие привычки.",

        "За то, что мне интересно узнавать тебя всё больше.",

        "За твою улыбку, которую хочется запоминать.",

        "За твою нежность в мелочах.",

        "За то, как ты умеешь быть невероятно красивой даже тогда, когда сама этого не замечаешь.",

        "За наши разговоры.",

        "За наши шутки.",

        "За моменты, которые остались только нашими.",

        "За то, что с тобой время проходит незаметно.",

        "За ожидание встречи с тобой.",

        "За чувство, когда вижу твоё имя на экране.",

        "За то, что ты умеешь заставить моё сердце биться немного быстрее.",

        "За твою улыбку после моих слов.",

        "За твою заботу.",

        "За твоё внимание.",

        "За то, что ты умеешь слушать.",

        "За то, что мне хочется заботиться о тебе.",

        "За желание делать тебя счастливее.",

        "За то, что твои радости становятся моими.",

        "За то, что твои переживания мне действительно небезразличны.",

        "За то, что мне хочется быть рядом.",

        "За то, что расстояние не смогло сделать тебя менее важной.",

        "За каждую встречу.",

        "За каждое наше объятие.",

        "За каждый взгляд.",

        "За каждую улыбку.",

        "За каждый момент рядом с тобой.",

        "За воспоминания, которые я никогда не хочу терять.",

        "За мечты, которые хочется однажды осуществить вместе.",

        "За то, что рядом с тобой хочется становиться лучше.",

        "За то, что ты вдохновляешь меня.",

        "За то, что ты умеешь делать мой мир немного теплее.",

        "За твою индивидуальность.",

        "За то, что такой девушки, как ты, больше нет.",

        "За то, что ты не похожа ни на кого.",

        "За твою особенную энергетику.",

        "За то, как ты умеешь оставаться в моих мыслях.",

        "За то, что иногда я улыбаюсь, просто вспомнив тебя.",

        "За то, что мне хочется фотографировать наши моменты.",

        "За то, что хочется создавать с тобой новые воспоминания.",

        "За наши маленькие традиции.",

        "За наши маленькие секреты.",

        "За каждое «скучаю».",

        "За каждое «береги себя».",

        "За каждое «доброй ночи».",

        "За каждое «доброе утро».",

        "За то, что даже простые слова от тебя имеют для меня значение.",

        "За то, что ты умеешь быть нежной.",

        "За то, что ты умеешь быть сильной.",

        "За твою смелость.",

        "За твою мечтательность.",

        "За твою непосредственность.",

        "За твою красоту изнутри.",

        "За твою красоту снаружи.",

        "За то, что рядом с тобой хочется улыбаться.",

        "За то, что рядом с тобой хочется любить.",

        "За то, что ты стала частью моих мыслей.",

        "За то, что ты стала частью моих планов.",

        "За то, что мне хочется видеть тебя счастливой.",

        "За то, что твоё счастье для меня имеет значение.",

        "За то, что мне хочется поддерживать тебя.",

        "За то, что мне хочется защищать тебя.",

        "За то, что мне хочется радовать тебя.",

        "За то, что мне хочется удивлять тебя.",

        "За то, что рядом с тобой я чувствую что-то настоящее.",

        "За то, что ты оставила след в моём сердце.",

        "За то, что я могу бесконечно находить в тебе что-то новое.",

        "За то, что одна мысль о тебе способна сделать день теплее.",

        "За то, что среди миллионов людей именно ты стала для меня особенной.",

        "За то, что наша история началась совершенно неожиданно.",

        "За то, что иногда самые красивые истории начинаются случайно.",

        "За то, что я никогда не ожидал, насколько важной ты станешь для меня.",

        "За каждый момент, который привёл нас сюда.",

        "За каждое воспоминание, которое теперь связано с тобой.",

        "За то, что я хочу ещё тысячи таких воспоминаний.",

        "За то, что мне хочется продолжения нашей истории.",

        "За то, что однажды я увидел твою страницу в TikTok\nи ещё не знал, что передо мной человек,\nкоторый однажды станет таким важным для меня.",

        "Но если честно…\nя люблю тебя не за что-то.\nЯ люблю тебя просто за то,\nчто ты — это ты. ❤️"

    ];


    scene.innerHTML = `

        <div class="eighth-glow"></div>

        <div class="eighth-content">

            <div class="eighth-label">
                CHAPTER · 03
            </div>

            <h2>
                100 причин
                <span>любить тебя.</span>
            </h2>

            <p class="eighth-intro">
                И я мог бы написать их ещё больше...
            </p>

            <div class="reason-card">

                <div class="reason-number">
                    <span id="reasonCurrent">01</span>
                    / 100
                </div>

                <div class="reason-heart">
                    ♡
                </div>

                <div
                    class="reason-text"
                    id="reasonText"
                >
                    ${reasons[0]}
                </div>

            </div>

            <div class="reason-buttons">

    <button
        id="reasonNextButton"
        class="reason-button"
    >
        Следующая причина
        <span>→</span>
    </button>


    <button
        id="reasonSkipButton"
        class="reason-skip"
    >
        Перейти дальше
        <span>♡</span>
    </button>

</div>

        </div>

    `;


    document.body.appendChild(scene);


    // ==========================================
    // ПОЯВЛЕНИЕ СЦЕНЫ
    // ==========================================

    setTimeout(() => {

        scene.classList.add("show");

    }, 100);


    // ==========================================
    // ЛОГИКА 100 ПРИЧИН
    // ==========================================

    let currentReason = 0;

    const reasonText =
        document.getElementById("reasonText");

    const reasonCurrent =
        document.getElementById("reasonCurrent");

    const button =
        document.getElementById("reasonNextButton");
const skipButton =
    document.getElementById("reasonSkipButton");


skipButton.addEventListener("click", () => {

    transitionToNinthScene();

});

    button.addEventListener("click", () => {

        if (currentReason >= reasons.length - 1) {

            transitionToNinthScene();

            return;

        }


        currentReason++;


        reasonText.classList.add("reason-changing");


        setTimeout(() => {

            reasonText.textContent =
                reasons[currentReason];

            reasonCurrent.textContent =
                String(currentReason + 1)
                    .padStart(2, "0");

            reasonText.classList.remove(
                "reason-changing"
            );


        }, 350);


        // Последняя причина

        if (currentReason === 99) {

            button.innerHTML =
                `Я понял ❤️`;

            scene.classList.add(
                "final-reason"
            );

        }

    });

}


// ==========================================
// ПЕРЕХОД К 8 СЦЕНЕ
// ==========================================

function transitionToEighthScene() {

    const scene =
        document.querySelector(".seventh-scene");

    if (!scene) return;


    scene.style.opacity = "0";

    scene.style.transform =
        "scale(1.04)";


    setTimeout(() => {

        scene.remove();

        createEighthScene();

    }, 1300);

}


// ==========================================
// ПЕРЕХОД К 9 СЦЕНЕ
// ==========================================

function transitionToNinthScene() {

    const scene =
        document.querySelector(".eighth-scene");

    if (!scene) return;


    scene.style.opacity = "0";

    scene.style.transform =
        "scale(1.04)";


    setTimeout(() => {

        scene.remove();

        createNinthScene();

    }, 1300);

}
// ==========================================
// ДЕВЯТАЯ СЦЕНА
// ФИНАЛ — ЛЮБОВЬ МОЯ
// ==========================================

function createNinthScene() {

    const scene = document.createElement("main");

    scene.classList.add("ninth-scene");


    scene.innerHTML = `

        <!-- СВЕЧЕНИЕ -->

        <div class="ninth-glow"></div>


        <!-- ЧАСТИЦЫ -->

        <div class="ninth-particles">

            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

        </div>


        <!-- ФОТОГРАФИИ -->

        <div class="ninth-photo ninth-photo-1">
            <div class="ninth-photo-inner">♡</div>
        </div>

        <div class="ninth-photo ninth-photo-2">
            <div class="ninth-photo-inner">♡</div>
        </div>

        <div class="ninth-photo ninth-photo-3">
            <div class="ninth-photo-inner">♡</div>
        </div>

        <div class="ninth-photo ninth-photo-4">
            <div class="ninth-photo-inner">♡</div>
        </div>


        <!-- ОСНОВНОЙ ТЕКСТ -->

        <div class="ninth-content">

            <div class="ninth-label">
                THE END · BUT NOT OUR STORY
            </div>


            <h1 class="ninth-title">
                Любовь
                <span>моя.</span>
            </h1>


            <div class="ninth-line"></div>


            <p class="ninth-text">

                Я благодарен судьбе за то,
                что однажды наши дороги пересеклись.

                <br><br>

                За тот день, когда я случайно увидел
                твою страницу в TikTok и ещё не знал,
                насколько сильно ты изменишь мою жизнь.

                <br><br>

                За каждый разговор, улыбку и момент,
                который теперь стал
                <strong>частью нашей истории.</strong>

            </p>


            <div class="ninth-final">

                И если бы мне снова пришлось выбирать...

                <br>

                я бы снова выбрал тебя.

            </div>


            <div class="ninth-heart">
                ❤️
            </div>


            <button
                id="ninthRestartButton"
                class="ninth-button"
            >
                Начать нашу историю снова
            </button>

        </div>

    `;


    document.body.appendChild(scene);


    // ==========================================
    // ПОЯВЛЕНИЕ
    // ==========================================

    setTimeout(() => {

        scene.classList.add("show");

    }, 100);


    // ==========================================
    // КНОПКА
    // ==========================================

    const button =
        document.getElementById("ninthRestartButton");


    button.addEventListener("click", () => {

        location.reload();

    });

}