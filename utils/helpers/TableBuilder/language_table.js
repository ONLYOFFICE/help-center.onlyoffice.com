import { languageCorr } from "@public/data/lng.js";
import { comingSoonLabel } from "@public/data/lng.js";
import jsonData from "@public/data/stats.json";
import jsonDataMobile from "@public/data/stats_mobile.json";
import translators from "@public/data/translators.json";
import newstr from "@public/data/newstr.json";
import $ from "jquery";

const allLanguageArray = [
    //locale    TOT code        SaaS,CS,DS,DE,Android,iOSDoc,iOSPr
    "af-ZA", "af", 0, 0, 0, 0, 0, 0, 0,
    "ar-AE", "ar-AE", 0, 0, 0, 0, 0, 0, 0,
    "ar-SA", "ar-SA", 0, 0, 1, 23, 0, 0, 0,
    "ar-TN", "ar-TN", 0, 0, 0, 0, 0, 0, 0,
    "be-BY", "be", 0, 0, 1, 23, 0, 0, 0,
    "bg-BG", "bg", 3, 3, 1, 23, 0, 0, 0,
    "bs-BA", "bs-BA", 0, 0, 0, 0, 0, 0, 0,
    "ca-ES", "ca", 0, 0, 1, 23, 0, 0, 0,
    "cs-CZ", "cs", 1, 1, 1, 21, 0, 1, 0,
    "Cy-sr-SP", "sr-Cyrl-CS", 0, 0, 0, 0, 0, 0, 0,
    "Cy-uz-UZ", "uz-Cyrl-UZ", 0, 0, 0, 0, 0, 0, 0,
    "da-DK", "da", 0, 0, 1, 23, 0, 0, 0,
    "de-DE", "de", 1, 1, 1, 21, 1, 1, 1,
    "el-GR", "el", 1, 1, 1, 23, 0, 0, 0,
    "en-US", "Neutral", 1, 1, 1, 21, 1, 1, 1,
    "es-ES", "es", 1, 1, 1, 21, 1, 1, 1,
    "es-AR", "es-AR", 0, 0, 0, 0, 0, 0, 0,
    "et-EE", "et", 0, 0, 0, 0, 0, 0, 0,
    "eu-ES", "eu-ES", 0, 0, 1, 0, 0, 0, 0,
    "fa-IR", "fa", 0, 0, 0, 0, 0, 0, 0,
    "fi-FI", "fi", 1, 1, 1, 23, 0, 0, 0,
    "fr-FR", "fr", 1, 1, 1, 21, 1, 1, 1,
    "gl-ES", "gl", 0, 0, 1, 13, 0, 0, 0,
    "he-IL", "he", 0, 0, 0, 0, 0, 0, 0,
    "hi-IN", "hi", 0, 0, 0, 0, 0, 0, 0,
    "hr-HR", "hr", 0, 0, 0, 0, 0, 0, 0,
    "hu-HU", "hu", 0, 0, 1, 23, 0, 0, 0,
    "hy-AM", "hy", 0, 0, 1, 0, 0, 0, 0,
    "id-ID", "id", 0, 0, 1, 23, 0, 0, 0,
    "is-IS", "is", 0, 0, 0, 0, 0, 0, 0,
    "it-IT", "it", 1, 1, 1, 21, 1, 0, 0,
    "ja-JP", "ja", 1, 1, 1, 23, 0, 0, 0,
    "ka-GE", "ka", 0, 0, 0, 0, 0, 0, 0,
    "kk-KZ", "kk", 0, 0, 0, 0, 0, 0, 0,
    "ko-KR", "ko", 1, 1, 1, 23, 0, 0, 0,
    "lo-LA", "lo", 0, 0, 1, 23, 0, 0, 0,
    "Lt-az-AZ", "az-Latn-AZ", 1, 0, 1, 0, 0, 0, 0,
    "lt-LT", "lt", 0, 0, 0, 0, 0, 0, 0,
    "Lt-sr-SP", "sr-Latn-CS", 0, 0, 1, 23, 0, 0, 0,
    "lv-LV", "lv", 1, 1, 1, 23, 0, 0, 0,
    "mk-MK", "mk", 0, 0, 0, 0, 0, 0, 0,
    "mn-MN", "mn", 0, 0, 0, 0, 0, 0, 0,
    "ms-MY", "ms-MY", 0, 0, 1, 0, 0, 0, 0,
    "my-MM", "my-MM", 0, 0, 0, 0, 0, 0, 0,
    "nb-NO", "nb-NO", 0, 0, 1, 23, 0, 0, 0,
    "nl-NL", "nl", 1, 1, 1, 23, 0, 0, 0,
    "pl-PL", "pl", 1, 1, 1, 21, 0, 0, 0,
    "pt-BR", "pt-BR", 1, 1, 1, 21, 1, 0, 0,
    "pt-PT", "pt", 1, 1, 1, 0, 0, 0, 0,
    "ro-RO", "ro", 0, 0, 1, 23, 0, 0, 0,
    "ru-RU", "ru", 1, 1, 1, 21, 1, 1, 1,
    "si-LK", "si", 0, 0, 1, 21, 0, 0, 0,
    "sk-SK", "sk", 1, 1, 1, 21, 0, 0, 0,
    "sl-SI", "sl", 1, 1, 1, 23, 0, 0, 0,
    "sq-AL", "sq", 0, 0, 0, 0, 0, 0, 0,
    "sv-SE", "sv", 0, 0, 1, 23, 0, 0, 0,
    "sw-KE", "sw", 0, 0, 0, 0, 0, 0, 0,
    "tg-Cyrl-TJ", "tg-Cyrl-TJ", 0, 0, 0, 0, 0, 0, 0,
    "th-TH", "th", 0, 0, 0, 0, 0, 0, 0,
    "tr-TR", "tr", 1, 1, 1, 23, 0, 0, 0,
    "uk-UA", "uk", 1, 1, 1, 23, 0, 0, 0,
    "vi-VN", "vi", 1, 1, 1, 23, 0, 0, 0,
    "zh-CN", "zh-CN", 1, 1, 1, 21, 0, 0, 0,
    "zh-TW", "zh-TW", 0, 0, 1, 0, 0, 0, 0
];
let d = new Date,
    currentDate = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(),
    updateDate = '2019-11-05',
    newLanguage = '',
    engTotal = 0,
    engTotalDesktop = 0,
    engTotalAndroid = 0,
    engTotaliOSDocuments = 0,
    engTotaliOSProjects = 0,
    langTotal = 0,
    languageAllNumber = 0,
    languageEditorsNumber = 0,
    languageDesktopNumber = 0,
    languageAndroidNumber = 0,
    languageiOSDocumentsNumber = 0,
    languageiOSProjectsNumber = 0,
    languageCommunityNumber = 0,
    languagesArray = [],
    languagesAndroidArray = [],
    languagesiOSDocumentsArray = [],
    languagesiOSProjectsArray = [],
    languagesDesktopArray = [],
    modulesLangArray = [],
    neutralLangArray = [],
    neutralLangAndroidArray = [],
    neutralLangDesktopArray = [],
    translatorUniqueNameArray = [],
    translatorNameArray = [], translatorByLangArray = [], transLangArray = [], newTransArray = [],
    newstrNameArray = [], newstrUniqueNameArray = [], newstrModule = [], newNewstrArray = [],
    saasLang = 0, docServerLang = 0, desktopLang = 0,
    serverLang = 0;
export const dateOfTable = new Date(updateDate).toLocaleDateString();
let OSArray = ['windows', 'linux', 'macos', 'windows linux', 'windows macos', 'linux macos', 'windows linux macos'],
    OSArrayHint = ['Windows', 'Linux', 'Mac OS', 'Windows, Linux', 'Windows, Mac OS', 'Linux, Mac OS', 'Windows, Linux, Mac OS'],
    OSmarkArray = [4, 7, 10, 11, 14, 17, 21];
let functionCalled = false;
let functionNewstrCalled = false;
let functionTranslatorsCalled = false;

export function buildMobileLargeTables(pageTopDivID) {
    if (functionCalled) return;
    functionCalled = true;
    let localeCode, arrayElementTitle;
    const langArray = jsonDataMobile.rows;

    const uniqueLanguagesAndroid = new Set();
    const uniqueLanguagesiOSDocuments = new Set();
    const uniqueLanguagesiOSProjects = new Set();

    for (let i = 1; i < allLanguageArray.length; i += 9) {
        const modulesLangAndroidArray = [];
        const modulesLangiOSDocumentsArray = [];
        const modulesLangiOSProjectsArray = [];
        let langAndroidTotal = 0;
        let langiOSDocumentsTotal = 0;
        let langiOSProjectsTotal = 0;

        for (let x = 0; x < langArray.length; x++) {
            const lang1title = langArray[x].title;

            if (allLanguageArray[i] !== lang1title) continue;

            const lang1count = langArray[x]["count(*)"];
            localeCode = langArray[x].title;
            arrayElementTitle = allLanguageArray[i - 1];
            let lang1projectName = langArray[x].projectName;
            const lang1moduleName = langArray[x].moduleName;

            if (lang1projectName === 'Mobile Applications') {
                if (lang1moduleName === 'Documents for Android') {
                    modulesLangAndroidArray.push(lang1projectName, lang1count);
                    langAndroidTotal += lang1count;
                } else if (lang1moduleName.includes('Documents for iOS')) {
                    modulesLangiOSDocumentsArray.push(lang1projectName, lang1count);
                    langiOSDocumentsTotal += lang1count;
                } else if (lang1moduleName === 'Projects for iOS') {
                    modulesLangiOSProjectsArray.push(lang1projectName, lang1count);
                    langiOSProjectsTotal += lang1count;
                }
            }
        }

        const androidLang = getLanguageStatus(allLanguageArray[i + 5]);
        const iOSDocumentsLang = getLanguageStatus(allLanguageArray[i + 6]);
        const iOSProjectsLang = getLanguageStatus(allLanguageArray[i + 7]);
        const languageName = getLanguageName(allLanguageArray[i]);

        if (modulesLangAndroidArray.length && !uniqueLanguagesAndroid.has(localeCode)) {
            languagesAndroidArray.push(localeCode, languageName, arrayElementTitle, langAndroidTotal, modulesLangAndroidArray, androidLang);
            uniqueLanguagesAndroid.add(localeCode);
        }
        if (modulesLangiOSDocumentsArray.length && !uniqueLanguagesiOSDocuments.has(localeCode)) {
            languagesiOSDocumentsArray.push(localeCode, languageName, arrayElementTitle, langiOSDocumentsTotal, modulesLangiOSDocumentsArray, iOSDocumentsLang);
            uniqueLanguagesiOSDocuments.add(localeCode);
        }
        if (modulesLangiOSProjectsArray.length && !uniqueLanguagesiOSProjects.has(localeCode)) {
            languagesiOSProjectsArray.push(localeCode, languageName, arrayElementTitle, langiOSProjectsTotal, modulesLangiOSProjectsArray, iOSProjectsLang);
            uniqueLanguagesiOSProjects.add(localeCode);
        }
    }

    const engTotalAndroid = getEngTotal(languagesAndroidArray);
    const engTotaliOSDocuments = getEngTotal(languagesiOSDocumentsArray);
    const engTotaliOSProjects = getEngTotal(languagesiOSProjectsArray);

    
    $.fn.buildMobileLanguages = function (tableID, languageIndex, languagesMobileArray, engTotalMobile) {
        const newLanguageMobileMark = getNewLanguageMobileMark(languagesMobileArray[languageIndex + 5]);
        const languageMobilePercent = Math.min(Math.round((languagesMobileArray[languageIndex + 3]) * 100 / engTotalMobile), 100);
        $(tableID).append(`
        <tr>
            <td><span className="locale_lng language_${languagesMobileArray[languageIndex + 2]}${newLanguageMobileMark}">${languagesMobileArray[languageIndex + 1]}</span></td>
            <td>${languagesMobileArray[languageIndex + 2]}</td>
            <td>${languageMobilePercent}%</td>
        </tr>
    `);
    }

    if (pageTopDivID === 'languageTablePage_androidDocuments') {
        for (let i = 0; i < languagesAndroidArray.length; i += 6) {
            if (languagesAndroidArray[i + 5] == 'yes' || languagesAndroidArray[i + 5] == 'yes new_language' || languagesAndroidArray[i + 5] == 'no comsoon') {
                languageAndroidNumber += 1;
                $('.table_versionlist').buildMobileLanguages('#languagesAndroidTable', i, languagesAndroidArray, engTotalAndroid);
            }
        }
        $('#languageAndroidNumber').append(languageAndroidNumber);
    } else if (pageTopDivID === 'languagesiOSDocumentsTable') {
        for (let i = 0; i < languagesiOSDocumentsArray.length; i += 6) {
            if (languagesiOSDocumentsArray[i + 5] == 'yes' || languagesiOSDocumentsArray[i + 5] == 'yes new_language' || languagesiOSDocumentsArray[i + 5] == 'no comsoon') {
                languageiOSDocumentsNumber += 1;
                $('.table_versionlist').buildMobileLanguages('#languagesiOSDocumentsTable', i, languagesiOSDocumentsArray, engTotaliOSDocuments);
            }
        }
        $('#languageiOSDocumentsNumber').append(languageiOSDocumentsNumber);
    } else if (pageTopDivID === 'languagesiOSProjectsTable') {
        for (let i = 0; i < languagesiOSProjectsArray.length; i += 6) {
            if (languagesiOSProjectsArray[i + 5] == 'yes' || languagesiOSProjectsArray[i + 5] == 'yes new_language' || languagesiOSProjectsArray[i + 5] == 'no comsoon') {
                languageiOSProjectsNumber += 1;
                $('.table_versionlist').buildMobileLanguages('#languagesiOSProjectsTable', i, languagesiOSProjectsArray, engTotaliOSProjects);
            }
        }
        document.getElementById('languageiOSProjectsNumber').innerHTML =`${languageiOSProjectsNumber}`;
    }

    //document.getElementById('totalChange').innerHTML = `<b>${engTotal.toLocaleString()}</b>`;
}

function getLanguageStatus(status) {
    switch (status) {
        case 1: return 'yes';
        case 2: return 'yes new_language';
        case 3: return 'no comsoon';
        default: return 'no';
    }
}

function getEngTotal(array) {
    for (let i = 0; i < array.length; i += 6) {
        if (array[i] === 'Neutral') {
            return array[i + 3];
        }
    }
    return 0;
}

function getNewLanguageMobileMark(status) {
    if (status === 'yes new_language') return ' new_language';
    if (status === 'no comsoon') return ' comsoon';
    return '';
}

export function buildLargeTables(pageTopDivID) {
    if (functionCalled) return;
    functionCalled = true;
    let localeCode, arrayElementTitle, lang1projectName;
    const langArray = jsonData.rows;
    for (let i = 1; i < allLanguageArray.length; i += 9) {
        var modulesLangArray = [],modulesLangDesktopArray = [],langTotal=0,langDesktopTotal=0,comingSoonSaasLabel='',comingSoonServerLabel='',comingSoonDocLabel='';
        for (let x = 0; x < langArray.length; x += 1) {
            var lang1title = langArray[x].title;
            if (allLanguageArray[i] == lang1title) {
                var lang1count = langArray[x]["count(*)"];
                localeCode = langArray[x].title;
                arrayElementTitle = allLanguageArray[i-1];
                lang1projectName = langArray[x].projectName;
                if(x<langArray.length-1){
                    var nextProject = langArray[x+1].projectName;
                } else {
                    var nextProject = '';
                }
                if (lang1projectName == 'TeamLab Editors') {
                    lang1projectName = 'ONLYOFFICE Editors';
                }
                if (nextProject == 'TeamLab Editors') {
                    nextProject = 'ONLYOFFICE Editors';
                }
            } else {
                continue;
            }
            if (lang1projectName != 'Desktop Editors') {
                modulesLangArray.push(lang1projectName, lang1count);
                langTotal += lang1count;
            }
            if (lang1projectName == 'Desktop Editors' || lang1projectName == 'ONLYOFFICE Editors') {
                modulesLangDesktopArray.push(lang1projectName, lang1count);
                langDesktopTotal += lang1count;
            }
        }
        if(allLanguageArray[i+1] == 1) {
            saasLang = 'yes';
        } else if (allLanguageArray[i+1] == 2) {
            saasLang = 'yes new_language';
        } else if (allLanguageArray[i+1] == 3) {
            comingSoonSaasLabel = 'title="' + comingSoonLabel + '"';
            saasLang = 'no comsoon';
        } else {
            saasLang = 'no';
        }
        if (allLanguageArray[i+2] == 1) {
            serverLang = 'yes';
        } else if (allLanguageArray[i+2] == 2) {
            serverLang = 'yes new_language';
        } else if (allLanguageArray[i+2] == 3) {
            comingSoonServerLabel = 'title="' + comingSoonLabel + '"';
            serverLang = 'no comsoon';
        } else {
            serverLang = 'no';
        }
        if (allLanguageArray[i+3] == 1) {
            docServerLang = 'yes';
        } else if (allLanguageArray[i+3] == 2) {
            docServerLang = 'yes new_language';
        } else if (allLanguageArray[i+3] == 3) {
            comingSoonDocLabel = 'title="' + comingSoonLabel + '"';
            docServerLang = 'no comsoon';
        } else {
            docServerLang = 'no';
        }
        if (allLanguageArray[i+4] == 4) {
            desktopLang = 'yes windows';
        } else if (allLanguageArray[i+4] == 7) {
            desktopLang = 'yes linux';
        } else if (allLanguageArray[i+4] == 10) {
            desktopLang = 'yes macos';
        } else if (allLanguageArray[i+4] == 6) {
            desktopLang = 'yes windows new_language';
        } else if (allLanguageArray[i+4] == 9) {
            desktopLang = 'yes linux new_language';
        } else if (allLanguageArray[i+4] == 12) {
            desktopLang = 'yes macos new_language';
        } else if (allLanguageArray[i+4] == 11) {
            desktopLang = 'yes windows linux';
        } else if (allLanguageArray[i+4] == 14) {
            desktopLang = 'yes windows macos';
        } else if (allLanguageArray[i+4] == 17) {
            desktopLang = 'yes linux macos';
        } else if (allLanguageArray[i+4] == 21) {
            desktopLang = 'yes windows linux macos';
        } else if (allLanguageArray[i+4] == 13) {
            desktopLang = 'yes windows linux new_language';
        } else if (allLanguageArray[i+4] == 16) {
            desktopLang = 'yes windows macos new_language';
        } else if (allLanguageArray[i+4] == 19) {
            desktopLang = 'yes linux macos new_language';
        } else if (allLanguageArray[i+4] == 23) {
            desktopLang = 'yes windows linux macos new_language';
        } else {
            desktopLang = 'no';
        }
        var languageName = getLanguageName(allLanguageArray[i]);
        var languageTotalOld=0;

        if (modulesLangArray.length != 0) {
            languagesArray.push(saasLang, serverLang, docServerLang, localeCode, languageName, arrayElementTitle, langTotal, languageTotalOld, modulesLangArray, comingSoonSaasLabel, comingSoonServerLabel, comingSoonDocLabel);
        }
        if (modulesLangDesktopArray.length != 0) {
            languagesDesktopArray.push(localeCode, languageName, arrayElementTitle, langDesktopTotal, desktopLang);
        }
    }
    for (i = 0; i < languagesArray.length; i += 12) {
        if (languagesArray[i+3] == 'Neutral') {
            var engTotal = languagesArray[i+6];
            neutralLangArray.push(languagesArray[i], languagesArray[i+1], languagesArray[i+2], languagesArray[i+3], languagesArray[i+4], languagesArray[i+5], languagesArray[i+6], languagesArray[i+7], languagesArray[i+8]);
        }
    }
    for (i = 0; i < languagesDesktopArray.length; i += 5) {
        if (languagesDesktopArray[i] == 'Neutral') {
            var engTotalDesktop = languagesDesktopArray[i+3];
            neutralLangDesktopArray.push(languagesDesktopArray[i], languagesDesktopArray[i+1], languagesDesktopArray[i+2], languagesDesktopArray[i+3], languagesDesktopArray[i+4]);
        }
    }
    $.fn.buildModuleTableLanguages = function (moduleID, tableID, languageIndex, newLanguageMark) {
        for (var z= 0; z < languagesArray[languageIndex+8].length; z += 2) {
            for (var w=0; w < neutralLangArray[8].length; w += 2) {
                if (languagesArray[languageIndex+8][z] == neutralLangArray[8][w] && languagesArray[languageIndex+8][z] == moduleID) {
                    var ttpcent = Math.round(languagesArray[languageIndex+8][z+1] * 100 / neutralLangArray[8][w+1]);
                    if (ttpcent > 100) {
                        var ttpcent = 100;
                    }
                    var completionRate = ttpcent.toString() + '%';
                }
            }
        }
        $(tableID).append('<tr><td><span class="locale_lng language_' + languagesArray[languageIndex+5] + newLanguageMark + '">' + languagesArray[languageIndex+4] + '</span></td><td>' + languagesArray[languageIndex+5] + '</td><td>' + completionRate + '</td></tr>');
    }
    
    $.fn.buildDesktopTableLanguages = function (tableID, languageIndex, newLanguageMark, OSmark) {
        var ttpcent = Math.round(languagesDesktopArray[languageIndex+3] * 100 / neutralLangDesktopArray[3]);
        if (ttpcent > 100) {
            var ttpcent = 100;
        }
        var completionRate = ttpcent.toString() + '%';
        for (let os = 0; os < OSmarkArray.length; ++os) {
            if(OSmark == OSmarkArray[os]) {
                var OSspan = '<span id="tdwttp_' + languagesDesktopArray[languageIndex] + OSmark + '" title="' + OSArrayHint[os] + '" class="tdwttp ' + OSArray[os] + '"><a target="_blank" href="https://www.onlyoffice.com/download-desktop.aspx"></a></span>';
            }
        }
        $(tableID).append('<tr><td><span class="locale_lng language_' + languagesDesktopArray[languageIndex+2] + newLanguageMark + '">' + languagesDesktopArray[languageIndex+1] + '</span></td><td>' + languagesDesktopArray[languageIndex+2] + '</td><td>' + completionRate + '</td><td>' + OSspan + '</td></tr>');
    }
    
    $.fn.buildServerLanguages = function (tableID, languageIndex) {
        var languageEditors = 0, neutralLanguageEditors = 0;
        if (languagesArray[languageIndex+1] == 'yes new_language') {
            var newLanguageMark = ' new_language';
        } else {
            var newLanguageMark = '';
        }
        for (var z= 0; z < languagesArray[languageIndex+8].length; z += 2) {
            for (var w=0; w < neutralLangArray[8].length; w += 2) {
                if (languagesArray[languageIndex+8][z] == neutralLangArray[8][w] && languagesArray[languageIndex+8][z] == 'ONLYOFFICE Editors') {
                    languageEditors = languagesArray[languageIndex+8][z+1], neutralLanguageEditors += neutralLangArray[8][w+1];
                }
            }
        }
        var languagePercent = Math.round((languagesArray[languageIndex + 6]-languageEditors) * 100 / (engTotal-neutralLanguageEditors));
        if (languagePercent > 100) {
            var languagePercent = 100;
        }
        $(tableID).append('<tr><td><span class="locale_lng language_' + languagesArray[languageIndex+5] + newLanguageMark + '">' + languagesArray[languageIndex+4] + '</span></td><td>' + languagesArray[languageIndex+5] + '</td><td>' + languagePercent + '% ' + '</td></tr>');
    }

    $.fn.buildTableLanguages = function (tableID, languageIndex) {
            var languagePercent = Math.round(languagesArray[languageIndex + 6] * 100 / engTotal);
            if (languagePercent > 100) {
                var languagePercent = 100;
            }
            var ttp = '';
            var ttpspan = '';
            for (var z= 0; z < languagesArray[languageIndex+8].length; z += 2) {
                for (var w=0; w < neutralLangArray[8].length; w += 2) {
                    if (languagesArray[languageIndex+8][z] == neutralLangArray[8][w]) {
                        var ttpcent = Math.round(languagesArray[languageIndex+8][z+1] * 100 / neutralLangArray[8][w+1]);
                        if (ttpcent >= 75) {
                            ttpspan = '<span class=ttp_great>' + ttpcent + '%</span>';
                        } else if (ttpcent < 75 && ttpcent >= 25) {
                            ttpspan = '<span class=ttp_norm>' + ttpcent + '%</span>';
                        } else if (ttpcent < 25) {
                            ttpspan = '<b class=ttp_bad>' + ttpcent + '%</b>';
                        }
                        ttp += '<b>' + languagesArray[languageIndex+8][z] + '</b>: ' + languagesArray[languageIndex+8][z+1] + ' (' + ttpspan + ')<br />';
                    }
                }
            }
            // if (languagesArray[languageIndex+8].length < neutralLangArray[8].length) {
            //     ttp += otherModules + ': 0 (<b class=ttp_bad>0%</b>)';
            // }
            $(tableID).append('<tr><td><span class="locale_lng language_' + languagesArray[languageIndex+5] + '">' + languagesArray[languageIndex+4] + '</span></td><td>' + languagesArray[languageIndex+5] + '</td><td class="tdwttp" id="tdwttp_' + languagesArray[languageIndex+3] + '" title="' + ttp + '">' + languagePercent + '% ' + '</td><td class="tdwttp" id="tpyn_' + (languageIndex*101) + '"' + languagesArray[languageIndex+9] + '><span class="' + languagesArray[languageIndex] + '"></span></td><td class="tdwttp" id="tpyn_' + (languageIndex*102) + '"' + languagesArray[languageIndex+10] + '><span class="' + languagesArray[languageIndex+1] + '"></span></td><td class="tdwttp" id="tpyn_' + (languageIndex*103) + '"' + languagesArray[languageIndex+11] + '><span class="' + languagesArray[languageIndex + 2] + '"></span></td></tr>');
    }

    //?
    if(pageTopDivID === 'languagesTable' || pageTopDivID === 'languageNumberPage_faq' || pageTopDivID === 'languageNumberPage_become') {
        for (var i = 0; i < languagesArray.length; i += 12) {
            if (languagesArray[i] == 'yes' || languagesArray[i+1] == 'yes' || languagesArray[i+2] == 'yes' || languagesArray[i] == 'yes new_language' || languagesArray[i+1] == 'yes new_language' || languagesArray[i+2] == 'yes new_language') {
                $('.table_versionlist').buildTableLanguages('#languagesTable', i);
                if (languagesArray[i] == 'yes' || languagesArray[i] == 'yes new_language') {
                    languageAllNumber+=1;
                }
            } else {
                $('.table_versionlist').buildTableLanguages('#languagesTableNotyet', i);
            }
        }
        document.getElementById('languageAllNumber').innerHTML =`${languageAllNumber}`;
    }
    if(pageTopDivID === 'languagesEditorsTable'){
        for (var i = 0; i < languagesArray.length; i += 12) {
            if (languagesArray[i+2] == 'yes' || languagesArray[i+2] == 'yes new_language') {
                if (languagesArray[i+2] == 'yes new_language') {
                    var newLanguageMark = ' new_language';
                } else {
                    var newLanguageMark = '';
                }
                languageEditorsNumber+=1;
                $('.table_versionlist').buildModuleTableLanguages('ONLYOFFICE Editors', '#languagesEditorsTable', i, newLanguageMark);
            }
        }
        document.getElementById('languageEditorsNumber').innerHTML =`${languageEditorsNumber}`;
    }
    if(pageTopDivID === 'languagesDesktopEditorsTable'){
        for (var i = 0; i < languagesDesktopArray.length; i += 5) {
            if (languagesDesktopArray[i+4] !== 'no') {
                var OSmark = 0;
                if (languagesDesktopArray[i+4].includes('windows')) {
                    OSmark += 4;
                }
                if (languagesDesktopArray[i+4].includes('linux')) {
                    OSmark += 7;
                }
                if (languagesDesktopArray[i+4].includes('macos')) {
                    OSmark += 10;
                }
                if (languagesDesktopArray[i+4].includes('new_language')) {
                    var newLanguageMark = ' new_language';
                } else {
                    var newLanguageMark = '';
                }
                languageDesktopNumber+=1;
                $('.table_versionlist').buildDesktopTableLanguages('#languagesDesktopEditorsTable', i, newLanguageMark, OSmark);
            }
        }
        document.getElementById('languageDesktopNumber').innerHTML =`${languageDesktopNumber}`;
    }
    if(pageTopDivID === 'languagesCommunityTable'){
        for (var i = 0; i < languagesArray.length; i += 12) {
            if (languagesArray[i+1] == 'yes' || languagesArray[i+1] == 'yes new_language') {
                languageCommunityNumber+=1;
                $('.table_versionlist').buildServerLanguages('#languagesCommunityTable', i);
            }
        }
        document.getElementById('languageCommunityNumber').innerHTML =`${languageCommunityNumber}`;
    }
    $('#totalChange').append('<b>' + engTotal.toLocaleString() + '</b>');
}

export function buildTableOfTranslators() {
    if (functionTranslatorsCalled) return;
    functionTranslatorsCalled = true;
    let translatorsArray = translators.rows;
        for (var x = 0; x < translatorsArray.length; x += 1) {
            var translatorName = translatorsArray[x].authorLogin, langLocale = translatorsArray[x].cultureTitle;
            translatorNameArray.push(translatorName);
        }
        $.each(translatorNameArray, function(i, el){
            if($.inArray(el, translatorUniqueNameArray) === -1) translatorUniqueNameArray.push(el);
        });
        for(var i = 0; i < translatorsArray.length; i += 1) {
            var langCount = translatorsArray[i]["count(*)"],langProjectName = translatorsArray[i].projectName,translatorName = translatorsArray[i].authorLogin,langLocale = translatorsArray[i].cultureTitle;
            var modulesLangArray = [];
            if (langProjectName == 'TeamLab Editors') {
                langProjectName = 'ONLYOFFICE Editors';
            }
            modulesLangArray = [langProjectName, langCount];
            var trLocale = [langLocale, modulesLangArray];
            for(var x = (i+1); x < translatorsArray.length; x += 1) {
                if (translatorsArray[x].authorLogin == translatorName && translatorsArray[x].cultureTitle == langLocale) {
                    var langCount1 = translatorsArray[x]["count(*)"],langProjectName1 = translatorsArray[x].projectName, i = x, b = 1;
                    if (langProjectName1 == 'TeamLab Editors') {
                        langProjectName1 = 'ONLYOFFICE Editors';
                    }
                    modulesLangArray.push(langProjectName1, langCount1);
                }
            }
            if (trLocale[1].length != 0) {
                translatorByLangArray.push(translatorName, trLocale);
            }
        }
        for(var y = 0; y < translatorUniqueNameArray.length; y += 1) {
            var transLangArray = [];
            for(var i = 0; i < translatorByLangArray.length; i += 2) {
                var temp = translatorByLangArray[i];
                if(translatorUniqueNameArray[y] == translatorByLangArray[i]) {
                    transLangArray.push(translatorByLangArray[i+1]);
                }
            }
            newTransArray.push(translatorUniqueNameArray[y], transLangArray);
        }
        for(var i = 0; i < newTransArray.length; i+=2) {
            var tableTranslator = newTransArray[i];
            var transLangTD = '';
            for (var x = 0; x < newTransArray[i+1].length; x += 1) {
                var tableLanguageID = newTransArray[i+1][x][0];
                var ttp = '';
                for(var q = 0; q < newTransArray[i+1][x][1].length; q +=2) {
                    ttp += '<b>' + newTransArray[i+1][x][1][q] + '</b>: ' + newTransArray[i+1][x][1][q+1] + ' <br />';
                }
                var languageName = getLanguageName(tableLanguageID);
                for (let z = 1; z < allLanguageArray.length; z += 9) {
                    if (allLanguageArray[z] == tableLanguageID) {
                        var arrayElementTitle = allLanguageArray[z-1];
                    } else {
                        continue;
                    }
                }
                transLangTD += '<span class="tdwttp locale_lng language_' + arrayElementTitle + '" id="tdtp_' + x + 'i' + i + '" title="' + ttp + '">' + languageName + '</span>';
            }
            $('#translatorList').append('<tr><td>' + tableTranslator + '</td><td>' + transLangTD + '</td></tr>');
        }
};

export function buildNewstrTable() {
    if (functionNewstrCalled) return;
    functionNewstrCalled = true;
    var newstrArray = newstr.rows;
        if (newstrArray.length == 0) {
            $('#translatorAttention_block').css('display', 'none');
        }
        for (var x = 0; x < newstrArray.length; x += 1) {
            var moduleName = newstrArray[x].projectName, sectionName = newstrArray[x].moduleName;
            if (moduleName == 'TeamLab Editors') {
                moduleName = 'ONLYOFFICE Editors';
            }
            newstrNameArray.push(moduleName);
        }
        $.each(newstrNameArray, function(i, el){
            if($.inArray(el, newstrUniqueNameArray) === -1) newstrUniqueNameArray.push(el);
        });
        for(var i = 0; i < newstrArray.length; i += 1) {
            var newstrCount = newstrArray[i]["count(*)"],moduleName = newstrArray[i].projectName,sectionName = newstrArray[i].moduleName,moduleDate = newstrArray[i].timeChanges;
            var sectionNewstrArray = [];
            if (moduleName == 'TeamLab Editors') {
                moduleName = 'ONLYOFFICE Editors';
            }
            sectionNewstrArray = [sectionName, newstrCount, moduleDate];
            if (sectionNewstrArray[1].length != 0) {
                newstrModule.push(moduleName, sectionNewstrArray);
            }
        }
        for(var y = 0; y < newstrUniqueNameArray.length; y += 1) {
            var newstrModuleArray = [];
            for(var i = 0; i < newstrModule.length; i += 2) {
                var temp = newstrModule[i];
                if(newstrUniqueNameArray[y] == newstrModule[i]) {
                    newstrModuleArray.push(newstrModule[i+1]);
                }
            }
            newNewstrArray.push(newstrUniqueNameArray[y], newstrModuleArray);
        }
        var tableModuleDateLatest = '', tableModuleDateEarliest = currentDate, moduleTotalCount = 0;
        for(var i = 0; i < newNewstrArray.length; i+=2) {
            let tableModuleTD = newNewstrArray[i], tableModuleCount = 0, tableSectionTD = '', ttp = '', tableModuleDateBiggest = '';
            for (let x = 0; x < newNewstrArray[i+1].length; x += 1) {
                let tableSectionID = newNewstrArray[i+1][x][0], 
                tableSectionCount = newNewstrArray[i+1][x][1], 
                tableModuleDate = newNewstrArray[i+1][x][2];
                ttp += tableSectionID + ': <b>' + tableSectionCount + '</b><br />';
                tableModuleCount += tableSectionCount;
                if (tableModuleDate > tableModuleDateBiggest) {
                    tableModuleDateBiggest = tableModuleDate;
                }
                if (tableModuleDate < tableModuleDateEarliest) {
                    tableModuleDateEarliest = tableModuleDate;
                }
            }

            
            let tableModuleDateLocale = new Date(tableModuleDateBiggest).toLocaleDateString();
            $('#newstrList').append('<tr class="tdwttp" id="tdtp_' + 'i' + i + '" title="' + ttp + '"><td>' + tableModuleTD + '</td><td>' + tableModuleCount + '</td><td>' + tableModuleDateLocale + '</td></tr>');
            moduleTotalCount += tableModuleCount;
            if (tableModuleDateBiggest > tableModuleDateLatest) {
                tableModuleDateLatest = tableModuleDateBiggest;
            }
        }
        var attentionDateDelta = Math.abs((new Date(currentDate)).getTime() - (new Date(tableModuleDateLatest)).getTime()), attentionDaysDelta = Math.ceil(attentionDateDelta / (1000 * 3600 * 24)), attentionCookieValue = null, neverShowTranslatorsCookie = null;
        if(neverShowTranslatorsCookie == 'never') {
            $('#translatorAttention_block').css('display', 'none');
        } else if (attentionCookieValue == 'visible' || attentionCookieValue == 'time2Show' || attentionCookieValue == undefined && neverShowTranslatorsCookie !== 'never') {
            $('#translatorAttention_block').fadeIn();
        } else if (attentionDaysDelta < 7 && neverShowTranslatorsCookie !== 'never') {
            $('#translatorAttention_block').fadeIn();
        } else if (attentionCookieValue == 'hidden') {
            $('#translatorAttention_block').css('display', 'none');
        }
        $('#neverShowTranslators').on('click', function(){
            $('#translatorAttention_block').fadeOut();
        });
        if ($('#neverShowTranslators').prop('checked')) {
            $('#translatorAttention_block').fadeOut();
        }
        $('#translatorAttention_block .close_cross').on('click', function(){
            $('#translatorAttention_block').fadeOut();
        });
        var sinceNewstrDate = new Date(tableModuleDateEarliest).toLocaleDateString();
        document.getElementById('moduleTotalCount').innerHTML =`${moduleTotalCount}`;
        document.getElementById('newstrDate').innerHTML =`${sinceNewstrDate}`;
};

function getLanguageName(currentLanguageID) {
    for (let y = 0; y < languageCorr.length; y += 2) {
        if (currentLanguageID.localeCompare(languageCorr[y]) === 0) {
            return languageCorr[y + 1];
        }
    }
}