var moment = require("../../moment");


    /**************************************************
      Persian
     *************************************************/

exports["lang:fa"] = {
    "parse" : function(test) {
        test.expect(96);
        moment.lang('fa');
        var tests = 'ژانویه ژانویه_فوریه فوریه_مارس مارس_آوریل آوریل_مه مه_ژوئن ژوئن_ژوئیه ژوئیه_اوت اوت_سپتامبر سپتامبر_اُکتبر اُکتبر_نوامبر نوامبر_دسامبر دسامبر'.split("_");
        var i;
        function equalTest(input, mmm, i) {
            test.equal(moment(input, mmm).month(), i, input + ' should be month ' + (i + 1));
        }
        for (i = 0; i < 12; i++) {
            tests[i] = tests[i].split(' ');
            equalTest(tests[i][0], 'MMM', i);
            equalTest(tests[i][1], 'MMM', i);
            equalTest(tests[i][0], 'MMMM', i);
            equalTest(tests[i][1], 'MMMM', i);
            equalTest(tests[i][0].toLocaleLowerCase(), 'MMMM', i);
            equalTest(tests[i][1].toLocaleLowerCase(), 'MMMM', i);
            equalTest(tests[i][0].toLocaleUpperCase(), 'MMMM', i);
            equalTest(tests[i][1].toLocaleUpperCase(), 'MMMM', i);
        }
        test.done();
    },

    "format" : function(test) {
        test.expect(18);
        moment.lang('fa');
        var a = [
                ['dddd, MMMM Do YYYY, h:mm:ss a',      'یکشنبه، 14م فوریه 2010، 3:25:50 ب.ظ'],
                ['ddd, hA',                            'یکشنبه، 3ب.ظ'],
                ['M Mo MM MMMM MMM',                   '2 م2 02 فوریه فوریه'],
                ['YYYY YY',                            '2010 10'],
                ['D Do DD',                            '14 14م 14'],
                ['d do dddd ddd dd',                   '0 0م یکشنبه یکشنبه ی'],
                ['DDD DDDo DDDD',                      '45 45م 045'],
                ['w wo ww',                            '8 8م 08'],
                ['h hh',                               '3 03'],
                ['H HH',                               '15 15'],
                ['m mm',                               '25 25'],
                ['s ss',                               '50 50'],
                ['a A',                                'ب.ظ ب.ظ'],
                ['t\\he DDDo \\d\\ay of t\\he ye\\ar', 'the 45th day of the year'],
                ['t\\he DDDo \\d\\ay of t\\he ye\\ar', '45مین روز سال'],
                ['L',                                  '02/14/2010'],
                ['LL',                                 '14 فوریه 2010'],
                ['LLL',                                '14 فوریه 2010 3:25 ب.ظ'],
                ['LLLL',                               'یکشنبه، 14 فوریه 2010، 3:25 ب.ظ']
        ],
            b = moment(new Date(2010, 1, 14, 15, 25, 50, 125)),
            i;
        for (i = 0; i < a.length; i++) {
            test.equal(b.format(a[i][0]), a[i][1], a[i][0] + ' ---> ' + a[i][1]);
        }
        test.done();
    },

    "format ordinal" : function(test) {
        test.expect(31);
        moment.lang('fa');
        test.equal(moment([2011, 0, 1]).format('DDDo'), '1م', '1م');
        test.equal(moment([2011, 0, 2]).format('DDDo'), '2م', '2م');
        test.equal(moment([2011, 0, 3]).format('DDDo'), '3م', '3م');
        test.equal(moment([2011, 0, 4]).format('DDDo'), '4م', '4م');
        test.equal(moment([2011, 0, 5]).format('DDDo'), '5م', '5م');
        test.equal(moment([2011, 0, 6]).format('DDDo'), '6م', '6م');
        test.equal(moment([2011, 0, 7]).format('DDDo'), '7م', '7م');
        test.equal(moment([2011, 0, 8]).format('DDDo'), '8م', '8م');
        test.equal(moment([2011, 0, 9]).format('DDDo'), '9م', '9م');
        test.equal(moment([2011, 0, 10]).format('DDDo'), '10م', '10م');
    
        test.equal(moment([2011, 0, 11]).format('DDDo'), '11م', '11م');
        test.equal(moment([2011, 0, 12]).format('DDDo'), '12م', '12م');
        test.equal(moment([2011, 0, 13]).format('DDDo'), '13م', '13م');
        test.equal(moment([2011, 0, 14]).format('DDDo'), '14م', '14م');
        test.equal(moment([2011, 0, 15]).format('DDDo'), '15م', '15م');
        test.equal(moment([2011, 0, 16]).format('DDDo'), '16م', '16م');
        test.equal(moment([2011, 0, 17]).format('DDDo'), '17م', '17م');
        test.equal(moment([2011, 0, 18]).format('DDDo'), '18م', '18م');
        test.equal(moment([2011, 0, 19]).format('DDDo'), '19م', '19م');
        test.equal(moment([2011, 0, 20]).format('DDDo'), '20م', '20م');
    
        test.equal(moment([2011, 0, 21]).format('DDDo'), '21م', '21م');
        test.equal(moment([2011, 0, 22]).format('DDDo'), '22م', '22م');
        test.equal(moment([2011, 0, 23]).format('DDDo'), '23م', '23م');
        test.equal(moment([2011, 0, 24]).format('DDDo'), '24م', '24م');
        test.equal(moment([2011, 0, 25]).format('DDDo'), '25م', '25م');
        test.equal(moment([2011, 0, 26]).format('DDDo'), '26م', '26م');
        test.equal(moment([2011, 0, 27]).format('DDDo'), '27م', '27م');
        test.equal(moment([2011, 0, 28]).format('DDDo'), '28م', '28م');
        test.equal(moment([2011, 0, 29]).format('DDDo'), '29م', '29م');
        test.equal(moment([2011, 0, 30]).format('DDDo'), '30م', '30م');
    
        test.equal(moment([2011, 0, 31]).format('DDDo'), '31م', '31م');
        test.done();
    },

    "format month" : function(test) {
        test.expect(12);
        moment.lang('fa');
        var expected = 'ژانویه ژانویه_فوریه فوریه_مارس مارس_آوریل آوریل_مه مه_ژوئن ژوئن_ژوئیه ژوئیه_اوت اوت_سپتامبر سپتامبر_اُکتبر اُکتبر_نوامبر نوامبر_دسامبر دسامبر'.split("_");
        var i;
        for (i = 0; i < expected.length; i++) {
            test.equal(moment([2011, i, 1]).format('MMMM MMM'), expected[i], expected[i]);
        }
        test.done();
    },

    "format week" : function(test) {
        test.expect(7);
        moment.lang('fa');
        var expected = 'یکشنبه یکشنبه ی_دوشنبه دوشنبه د_سه‌شنبه سه‌شنبه س_چهارشنبه چهارشنبه چ_پنجشنبه پنجشنبه پ_جمعه جمعه ج_شنبه شنبه ش'.split("_");
        var i;
        for (i = 0; i < expected.length; i++) {
            test.equal(moment([2011, 0, 2 + i]).format('dddd ddd dd'), expected[i], expected[i]);
        }
        test.done();
    },

    "from" : function(test) {
        test.expect(30);
        moment.lang('fa');
        var start = moment([2007, 1, 28]);
        test.equal(start.from(moment([2007, 1, 28]).add({ s: 44 }), true), "چند ثانیه",  "44 seconds = a few seconds");
        test.equal(start.from(moment([2007, 1, 28]).add({ s: 45 }), true), "یک دقیقه",      "45 seconds = a minute");
        test.equal(start.from(moment([2007, 1, 28]).add({ s: 89 }), true), "یک دقیقه",      "89 seconds = a minute");
        test.equal(start.from(moment([2007, 1, 28]).add({ s: 90 }), true), "2 دقیقه",       "90 seconds = 2 minutes");
        test.equal(start.from(moment([2007, 1, 28]).add({ m: 44 }), true), "44 دقیقه",      "44 minutes = 44 minutes");
        test.equal(start.from(moment([2007, 1, 28]).add({ m: 45 }), true), "یک ساعت",       "45 minutes = an hour");
        test.equal(start.from(moment([2007, 1, 28]).add({ m: 89 }), true), "یک ساعت",       "89 minutes = an hour");
        test.equal(start.from(moment([2007, 1, 28]).add({ m: 90 }), true), "2 ساعت",        "90 minutes = 2 hours");
        test.equal(start.from(moment([2007, 1, 28]).add({ h: 5 }), true), "5 ساعت",         "5 hours = 5 hours");
        test.equal(start.from(moment([2007, 1, 28]).add({ h: 21 }), true), "21 ساعت",       "21 hours = 21 hours");
        test.equal(start.from(moment([2007, 1, 28]).add({ h: 22 }), true), "یک روز",        "22 hours = a day");
        test.equal(start.from(moment([2007, 1, 28]).add({ h: 35 }), true), "یک روز",        "35 hours = a day");
        test.equal(start.from(moment([2007, 1, 28]).add({ h: 36 }), true), "2 روز",         "36 hours = 2 days");
        test.equal(start.from(moment([2007, 1, 28]).add({ d: 1 }), true), "یک روز",         "1 day = a day");
        test.equal(start.from(moment([2007, 1, 28]).add({ d: 5 }), true), "5 روز",          "5 days = 5 days");
        test.equal(start.from(moment([2007, 1, 28]).add({ d: 25 }), true), "25 روز",        "25 days = 25 days");
        test.equal(start.from(moment([2007, 1, 28]).add({ d: 26 }), true), "یک ماه",        "26 days = a month");
        test.equal(start.from(moment([2007, 1, 28]).add({ d: 30 }), true), "یک ماه",        "30 days = a month");
        test.equal(start.from(moment([2007, 1, 28]).add({ d: 45 }), true), "یک ماه",        "45 days = a month");
        test.equal(start.from(moment([2007, 1, 28]).add({ d: 46 }), true), "2 ماه",         "46 days = 2 months");
        test.equal(start.from(moment([2007, 1, 28]).add({ d: 74 }), true), "2 ماه",         "75 days = 2 months");
        test.equal(start.from(moment([2007, 1, 28]).add({ d: 76 }), true), "3 ماه",         "76 days = 3 months");
        test.equal(start.from(moment([2007, 1, 28]).add({ M: 1 }), true), "یک ماه",         "1 month = a month");
        test.equal(start.from(moment([2007, 1, 28]).add({ M: 5 }), true), "5 ماه",          "5 months = 5 months");
        test.equal(start.from(moment([2007, 1, 28]).add({ d: 344 }), true), "11 ماه",       "344 days = 11 months");
        test.equal(start.from(moment([2007, 1, 28]).add({ d: 345 }), true), "یک سال",       "345 days = a year");
        test.equal(start.from(moment([2007, 1, 28]).add({ d: 547 }), true), "یک سال",       "547 days = a year");
        test.equal(start.from(moment([2007, 1, 28]).add({ d: 548 }), true), "2 سال",        "548 days = 2 years");
        test.equal(start.from(moment([2007, 1, 28]).add({ y: 1 }), true), "یک سال",         "1 year = a year");
        test.equal(start.from(moment([2007, 1, 28]).add({ y: 5 }), true), "5 سال",          "5 years = 5 years");
        test.done();
    },

    "suffix" : function(test) {
        test.expect(2);
        moment.lang('fa');
        test.equal(moment(30000).from(0), "بمدت چند ثانیه",  "prefix");
        test.equal(moment(0).from(30000), "چند ثانیه قبل", "suffix");
        test.done();
    },

    "now from now" : function(test) {
        test.expect(1);
        moment.lang('fa');
        test.equal(moment().fromNow(), "چند ثانیه قبل",  "now from now should display as in the past");
        test.done();
    },

    "fromNow" : function(test) {
        test.expect(2);
        moment.lang('fa');
        test.equal(moment().add({s:30}).fromNow(), "چند ثانیه قبل", "in a few seconds");
        test.equal(moment().add({d:5}).fromNow(), "در 5 روز", "in 5 days");
        test.done();
    },

    "calendar day" : function(test) {
        test.expect(6);
        moment.lang('fa');
    
        var a = moment().hours(2).minutes(0).seconds(0);
    
        test.equal(moment(a).calendar(),                     "امروز در ساعت 2:00 صبح", "today at the same time");
        test.equal(moment(a).add({ m: 25 }).calendar(),      "امروز در ساعت 2:25 صبح", "Now plus 25 min");
        test.equal(moment(a).add({ h: 1 }).calendar(),       "امروز در ساعت 3 صبح",    "Now plus 1 hours");
        test.equal(moment(a).add({ d: 1 }).calendar(),       "فردا در ساعت 2:00 صبح",  "tomorrow at the same time");
        test.equal(moment(a).subtract({ h: 1 }).calendar(),  "امروز در ساعت 1:00 صبح", "Now minus 1 hours");
        test.equal(moment(a).subtract({ d: 1 }).calendar(),  "دیروز در ساعت 2:00 صبح", "yesterday at the same time");
        test.done();
    },

    "calendar next week" : function(test) {
        test.expect(15);
        moment.lang('en');
    
        var i;
        var m;
    
        for (i = 2; i < 7; i++) {
            m = moment().add({ d: i });
            test.equal(m.calendar(),       m.format('dddd [at] LT'),  "امروز + " + i + " days current time");
            m.hours(0).minutes(0).seconds(0).milliseconds(0);
            test.equal(m.calendar(),       m.format('dddd [at] LT'),  "امروز + " + i + " days beginning of day");
            m.hours(23).minutes(59).seconds(59).milliseconds(999);
            test.equal(m.calendar(),       m.format('dddd [at] LT'),  "امروز + " + i + " days end of day");
        }
        test.done();
    },

    "calendar last week" : function(test) {
        test.expect(15);
        moment.lang('en');
    
        for (i = 2; i < 7; i++) {
            m = moment().subtract({ d: i });
            test.equal(m.calendar(),       m.format('[last] dddd [at] LT'),  "امروز - " + i + " days current time");
            m.hours(0).minutes(0).seconds(0).milliseconds(0);
            test.equal(m.calendar(),       m.format('[last] dddd [at] LT'),  "امروز - " + i + " days beginning of day");
            m.hours(23).minutes(59).seconds(59).milliseconds(999);
            test.equal(m.calendar(),       m.format('[last] dddd [at] LT'),  "امروز - " + i + " days end of day");
        }
        test.done();
    },

    "calendar all else" : function(test) {
        test.expect(4);
        moment.lang('en');
        var weeksAgo = moment().subtract({ w: 1 });
        var weeksFromNow = moment().add({ w: 1 });
        
        test.equal(weeksAgo.calendar(),       weeksAgo.format('L'),  "1 هفته قبل");
        test.equal(weeksFromNow.calendar(),   weeksFromNow.format('L'),  "بمدت 1 هفته");
    
        weeksAgo = moment().subtract({ w: 2 });
        weeksFromNow = moment().add({ w: 2 });
        
        test.equal(weeksAgo.calendar(),       weeksAgo.format('L'),  "2 هفته قبل");
        test.equal(weeksFromNow.calendar(),   weeksFromNow.format('L'),  "بمدت 2 هفته");
    test.done();
    }
};
