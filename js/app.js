Array.prototype.shuffle = function () {
    var i = this.length, j, temp;
    if (i == 0) return this;
    while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
}

var app = new Vue({
    el: '#app',
    data: {
        search: '',
        rootURL: 'https://wentin.github.io/Crafting-Interactions-2020/',
        projects: [
            {
                "name": "Bowen Shen",
                "project": "Social Interactions for Elderly",
                "url": "bowen-shen/"
            },
            {
                "name": "Claudia Russo",
                "project": "Hero: a Helping Hand for the Elderly",
                "url": "claudia-russo/"
            },
            {
                "name": "Frank Gong",
                "project": "Sharedbox: Community Toy Sharing Service",
                "url": "frank-gong/"
            },
            {
                "name": "Heyu Zhang",
                "project": "Keys for Kids",
                "url": "heyu-zhang/"
            },
            {
                "name": "Hyelim Lim",
                "project": "Spoonful",
                "url": "hyelim-lim/"
            },
            {
                "name": "Jinpei Wei",
                "project": "ASL Music",
                "url": "jinpei-wei/"
            },
            {
                "name": "Liz Wang",
                "project": "Keys for Kids",
                "url": "liz-wang/"
            },
            {
                "name": "Poonam Patel",
                "project": "It's Showtime, a Mobile Puppet Theatre",
                "url": "poonam-patel/"
            },
            {
                "name": "Rafa Poloni",
                "project": "Keyddo",
                "url": "rafa-poloni/"
            },
            {
                "name": "Samantha Brooks",
                "project": "Animal Friends Math",
                "url": "samantha-brooks/"
            },
            {
                "name": "Scott Zachau",
                "project": "Blood Pressure Monitor",
                "url": "scott-zachau/scott-portfolio/"
            },
            {
                "name": "Shruti Arora",
                "project": "Smart Elevator",
                "url": "shruti-arora/"
            },
            {
                "name": "Shuchen Wang",
                "project": "Less toys more Joy",
                "url": "shuchen-wang/"
            },
            {
                "name": "Sophia Deng",
                "project": "Memory Box",
                "url": "sophia-deng/"
            },
            {
                "name": "Xiaofang Fan",
                "project": "Memory: Voice Diary App for the Elderly",
                "url": "xiaofang-fan/"
            },
            {
                "name": "Yiting Lu",
                "project": "TINTE Clock",
                "url": "yiting-lu/"
            },
            {
                "name": "You Zhang",
                "project": "ASL Music",
                "url": "you-zhang/"
            },
            {
                "name": "Yuan Chen",
                "project": "HearNote",
                "url": "yuan-chen/"
            }
        ]
    },
    created: function () {
        this.projects.shuffle();
    },
    computed: {
        filteredProjects: function () {
            return this.projects.filter(studentProject => {
                var isIncluded = false;
                if (studentProject.name.toLowerCase().includes(this.search.toLowerCase())) {
                    isIncluded = true;
                } else if (studentProject.project.toLowerCase().includes(this.search.toLowerCase())) {
                    isIncluded = true;
                }
                return isIncluded;
            })
        }
    },
    methods: {
        spanify: function (text) {
            var textArray = text.split("");
            var result = "";
            var time = 1;
            for (var i = 0; i < textArray.length; i++) {
                result += "<span style='animation-delay: " + i / textArray.length * time + "s;'>" + textArray[i] + "</span>";
            }
            return result;
        }
    }
})