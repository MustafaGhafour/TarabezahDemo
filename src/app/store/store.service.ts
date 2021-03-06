import { Injectable } from "@angular/core";

import { Istore } from "./Istore";

@Injectable({
    providedIn: "root"
})
export class StoreService {
    private stores = [
        {
            "id": 1,
            "name": "Kling-Spencer",
            "description": "sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna",
            "email": "fdory0@opera.com",
            "image": "https://dummyimage.com/300x300.bmp/cc0000/ffffff&text=Kling-Spencer",
            "related": [
                2,
                3,
                6,
                8,
                23
            ]
        },
        {
            "id": 2,
            "name": "Donnelly, Lockman and Dare",
            "description": "in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer",
            "email": "amcglaughn1@indiatimes.com",
            "image": "https://dummyimage.com/300x300.png/5fa2dd/ffffff&text=Donnelly",
            "related": null
        },
        {
            "id": 3,
            "name": "Klein LLC",
            "description": "dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat",
            "email": "kcaso2@miibeian.gov.cn",
            "image": "https://dummyimage.com/300x300.jpg/cc0000/ffffff&text=Klein%20LLC",
            "related": [
                15,
                13,
                1,
                5,
                4
            ]
        },
        {
            "id": 4,
            "name": "Aufderhar Group",
            "description": "id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor",
            "email": "ageleman3@zdnet.com",
            "image": "https://dummyimage.com/300x300.bmp/dddddd/000000&text=Aufderhar%20Group",
            "related": null
        },
        {
            "id": 5,
            "name": "Lynch, Raynor and Mayer",
            "description": "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum",
            "email": "dleece4@apache.org",
            "image": "https://dummyimage.com/300x300.jpg/dddddd/000000",
            "related": null
        },
        {
            "id": 6,
            "name": "Kuhn, Miller and Carroll",
            "description": "in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing",
            "email": "bgotliffe5@seesaa.net",
            "image": "https://dummyimage.com/300x300.png/5fa2dd/ffffff&text=Kuhn,%20Miller%20and%20Carroll",
            "related": [
                1,
                29,
                15
            ]
        },
        {
            "id": 7,
            "name": "Feest-Brown",
            "description": "ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis",
            "email": "mbridges6@deviantart.com",
            "image": "https://dummyimage.com/300x300.bmp/dddddd/000000&text=Feest-Brown",
            "related": null
        },
        {
            "id": 8,
            "name": "Gutmann, Buckridge and Kris",
            "description": "quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem",
            "email": "tdumbrell7@ted.com",
            "image": "https://dummyimage.com/300x300.bmp/ff4444/ffffff&text=Gutmann",
            "related": [
                14,
                20,
                23,
                27
            ]
        },
        {
            "id": 9,
            "name": "McLaughlin-Bogan",
            "description": "morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque",
            "email": "lgadsdon8@joomla.org",
            "image": "https://dummyimage.com/300x300.jpg/dddddd/000000&text=McLaughlin-Bogan",
            "related": [
                6,
                9,
                12,
                30
            ]
        },
        {
            "id": 10,
            "name": "Kilback-Padberg",
            "description": "leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac",
            "email": "eodegaard9@dailymail.co.uk",
            "image": "https://dummyimage.com/300x300.png/ff4444/ffffff&text=Kilback-Padberg",
            "related": null
        },
        {
            "id": 11,
            "name": "Skiles LLC",
            "description": "rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget",
            "email": "marchibolda@apple.com",
            "image": "https://dummyimage.com/300x300.bmp/dddddd/000000&text=Skiles%20LLC",
            "related": [
                21,
                27,
                28,
                5
            ]
        },
        {
            "id": 12,
            "name": "McGlynn Group",
            "description": "nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus",
            "email": "eraggettb@nba.com",
            "image": "https://dummyimage.com/300x300.bmp/cc0000/ffffff&text=McGlynn%20Group",
            "related": [
                10,
                18,
                26
            ]
        },
        {
            "id": 13,
            "name": "Cassin-Kling",
            "description": "ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis",
            "email": "cdunbletonc@indiatimes.com",
            "image": "https://dummyimage.com/300x300.jpg/cc0000/ffffff&text=Cassin-Kling",
            "related": [
                17,
                29,
                1,
                3,
                8
            ]
        },
        {
            "id": 14,
            "name": "Greenfelder, Conroy and Schinner",
            "description": "imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus",
            "email": "njamiesond@ehow.com",
            "image": "https://dummyimage.com/300x300.bmp/dddddd/000000&text=Greenfelder",
            "related": [
                18,
                21,
                27
            ]
        },
        {
            "id": 15,
            "name": "MacGyver, Huel and Lind",
            "description": "cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in",
            "email": "tclinche@soundcloud.com",
            "image": "https://dummyimage.com/300x300.bmp/ff4444/ffffff&text=MacGyver",
            "related": null
        },
        {
            "id": 16,
            "name": "Aufderhar-Little",
            "description": "nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu",
            "email": "epennellsf@symantec.com",
            "image": "https://dummyimage.com/300x300.png/dddddd/000000&text=Aufderhar-Little",
            "related": null
        },
        {
            "id": 17,
            "name": "Graham-Berge",
            "description": "non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci",
            "email": "rvielg@weibo.com",
            "image": "https://dummyimage.com/300x300.bmp/ff4444/ffffff&text=Graham-Berge",
            "related": [
                12,
                16,
                29,
                30
            ]
        },
        {
            "id": 18,
            "name": "Gaylord, Klein and Donnelly",
            "description": "ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue",
            "email": "estoyellh@bing.com",
            "image": "https://dummyimage.com/300x300.jpg/cc0000/ffffff&text=Klein%20and%20Donnelly",
            "related": [
                6,
                7,
                9,
                18,
                21
            ]
        },
        {
            "id": 19,
            "name": "Gusikowski Group",
            "description": "lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique",
            "email": "kpalatinoi@toplist.cz",
            "image": "https://dummyimage.com/300x300.jpg/ff4444/ffffff&text=Gusikowski",
            "related": [
                16,
                29,
                3
            ]
        },
        {
            "id": 20,
            "name": "Jaskolski-McKenzie",
            "description": "a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec",
            "email": "sloganj@japanpost.jp",
            "image": "https://dummyimage.com/300x300.bmp/cc0000/ffffff&text=Jaskolski-McKenzie",
            "related": [
                12,
                14,
                18
            ]
        },
        {
            "id": 21,
            "name": "Kautzer, Dooley and Kuhic",
            "description": "hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in",
            "email": "snoodsk@over-blog.com",
            "image": "https://dummyimage.com/300x300.jpg/dddddd/000000&text=Kautzer",
            "related": [
                3,
                5,
                17,
                29,
                30
            ]
        },
        {
            "id": 22,
            "name": "Kohler, Tremblay and Bernier",
            "description": "in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at",
            "email": "zsorriel@arizona.edu",
            "image": "https://dummyimage.com/300x300.png/ff4444/ffffff&text=Kohler",
            "related": null
        },
        {
            "id": 23,
            "name": "Cummerata, Trantow and Huels",
            "description": "potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non",
            "email": "rshillingtonm@people.com.cn",
            "image": "https://dummyimage.com/300x300.jpg/dddddd/000000&text=Cummerata",
            "related": [
                5,
                4,
                13,
                23,
                27
            ]
        },
        {
            "id": 24,
            "name": "O'Reilly LLC",
            "description": "eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a",
            "email": "tstaten@symantec.com",
            "image": "https://dummyimage.com/300x300.png/5fa2dd/ffffff&text=O'Reilly%20LLC",
            "related": [
                4,
                5,
                6,
                10
            ]
        },
        {
            "id": 25,
            "name": "Grant-Spencer",
            "description": "augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a",
            "email": "bgrzegorczyko@vk.com",
            "image": "https://dummyimage.com/300x300.png/ff4444/ffffff&text=Grant-Spencer",
            "related": null
        },
        {
            "id": 26,
            "name": "Jacobi-Jaskolski",
            "description": "orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes",
            "email": "afranktonp@uol.com.br",
            "image": "https://dummyimage.com/300x300.bmp/5fa2dd/ffffff&text=Jacobi-Jaskolski",
            "related": null
        },
        {
            "id": 27,
            "name": "Heathcote LLC",
            "description": "curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus",
            "email": "sgeggusq@weather.com",
            "image": "https://dummyimage.com/300x300.bmp/5fa2dd/ffffff&text=Heathcote%20LLC",
            "related": [
                15,
                20,
                1,
                3
            ]
        },
        {
            "id": 28,
            "name": "Towne, Schaefer and Reichert",
            "description": "congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis",
            "email": "msnoadr@army.mil",
            "image": "https://dummyimage.com/300x300.jpg/ff4444/ffffff&text=Towne",
            "related": null
        },
        {
            "id": 29,
            "name": "Graham, Green and Roberts",
            "description": "vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida",
            "email": "aflecknoes@redcross.org",
            "image": "https://dummyimage.com/300x300.jpg/dddddd/000000&text=Graham",
            "related": null
        },
        {
            "id": 30,
            "name": "Commings Group",
            "description": "luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue",
            "email": "gmationt@slideshare.net",
            "image": "https://dummyimage.com/300x300.jpg/cc0000/ffffff&text=Commings%20Group",
            "related": null
        }
    ]

    getItems(): Array<Istore> {
        return this.stores;
    }

    getItem(id: number): Istore {
        return this.stores.filter((item) => item.id === id)[0];
    }
}
