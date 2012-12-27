// moment.js language configuration
// language : persian (fa)
// author : Omid K. Rad : https://github.com/omidkrad
(function () {
    // Notes: Persian culture specs are taken from: http://pastehtml.com/view/clt3qjk84.html
    // The document is old but the data is valid. Use RTL embedding for correct formatting.
    // Month names are transliterated French from Gregorian calendar. For dates based on Persian
    // calendar, see this related project: http://intldate.codeplex.com
    var lang = {
        months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اُکتبر_نوامبر_دسامبر".split("_"),
        monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اُکتبر_نوامبر_دسامبر".split("_"),
        weekdays: "یکشنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنجشنبه_جمعه_شنبه".split("_"),
        weekdaysShort: "یکشنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنجشنبه_جمعه_شنبه".split("_"),
        weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            L: "YYYY/DD/MM",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd، D MMMM YYYY، LT"
        },
        meridiem: function (hours) {
            if (hours > 19) return 'شب';
            if (hours > 15) return 'عصر';
            if (hours > 12) return 'ب.ظ';
            if (hours > 11) return 'ظهر';
            return 'صبح';
        },
        calendar: {
            sameDay: '[امروز در ساعت] LT',
            nextDay: '[فردا در ساعت] LT',
            nextWeek: 'dddd [ساعت] LT',
            lastDay: '[دیروز در ساعت] LT',
            lastWeek: 'dddd[‌ی گذشته در ساعت] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: "بمدت %s",
            past: "%s قبل",
            s: "چند ثانیه",
            m: "یک دقیقه",
            mm: "%d دقیقه",
            h: "یک ساعت",
            hh: "%d ساعت",
            d: "یک روز",
            dd: "%d روز",
            M: "یک ماه",
            MM: "%d ماه",
            y: "یک سال",
            yy: "%d سال"
        },
        ordinal: function (number) {
            // TODO: add rules for special cases
            return 'م';
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('fa', lang);
    }
} ());