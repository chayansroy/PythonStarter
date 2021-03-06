myData = [
[40.3439888,-74.6514481, 'Princeton, NJ 08544, USA'],
[50.06688579999999,19.9136192, 'aleja Adama Mickiewicza 30, 30-059 Kraków, Poland'],
[52.2394019,21.0150792, 'Krakowskie Przedmieście 5, 00-068 Warszawa, Poland'],
[30.018923,31.499674, 'AUC Avenue، New Cairo، Cairo Governorate 11835, Egypt'],
[33.4242399,-111.9280527, 'Tempe, AZ 85281, USA'],
[38.0399391,23.8030901, 'Monumental Plaza, Building C, 1st Floor, Leof. Kifisias 44, Marousi 151 25, Greece'],
[28.3639976,75.58696809999999, 'VidyaVihar Campus, street number 41, Pilani, Rajasthan 333031, India'],
[6.8946472,3.7174267, 'Ilishan-Remo, Nigeria'],
[25.2677203,82.99125819999999, 'Ajagara, Varanasi, Uttar Pradesh 221005, India'],
[12.9527314,77.5157387, 'Gnana Bharathi, Bengaluru, Karnataka 560056, India'],
[31.5497007,-97.1143046, '1301 S University Parks Dr, Waco, TX 76706, USA'],
[39.9619537,116.3662615, '19 Xinjiekou Outer St, BeiTaiPingZhuang, Haidian Qu, Beijing Shi, China, 100875'],
[53.8938988,27.5460609, 'Praspyekt Nyezalyezhnastsi 4, Minsk, Belarus'],
[44.8184339,20.4575676, 'Studentski trg 1, Beograd, Serbia'],
[42.5030333,-89.0309048, '700 College St, Beloit, WI 53511, USA'],
[53.8938988,27.5460609, 'Praspyekt Nyezalyezhnastsi 4, Minsk, Belarus'],
[31.262218,34.801461, 'שד בן-גוריון 1, Beersheba, Israel'],
[10.6779085,78.74454879999999, 'Palkalaiperur, Tiruchirappalli, Tamil Nadu 620024, India'],
[42.3504997,-71.1053991, 'Boston, MA 02215, USA'],
[35.3050053,-120.6624942, 'San Luis Obispo, CA 93407, USA'],
[34.1821786,-117.3235324, '5500 University Pkwy, San Bernardino, CA 92407, USA'],
[51.5210038,-0.1746353, '25 Paddington Green, London W2 1NB, UK'],
[40.8075355,-73.9625727, '116th St & Broadway, New York, NY 10027, USA'],
[52.074041,-0.6282032, 'College Rd, Bedford MK43 0AL, UK'],
[50.1030364,14.3912841, 'Zikova 1903/4, 166 36 Praha 6, Czechia'],
[43.7044406,-72.2886935, 'Hanover, NH 03755, USA'],
[37.3195396,-122.0450548, '21250 Stevens Creek Blvd, Cupertino, CA 95014, USA'],
[51.3767548,7.495643100000001, 'Universitätsstraße 25, 58097 Hagen, Germany'],
[48.4331922,35.0427966, 'Haharina Ave, 72, Dnipropetrovsk, Dnipropetrovsk Oblast, Ukraine, 49000'],
[38.4306911,27.1369201, 'Kültür Mahallesi, Cumhuriyet Blv No:144, 35220 Konak/İzmir, Turkey'],
[39.9566127,-75.18994409999999, '3141 Chestnut St, Philadelphia, PA 19104, USA'],
[30.2849185,-97.7340567, 'Austin, TX 78712, USA'],
[36.0014258,-78.9382286, 'Durham, NC 27708, USA'],
[45.786447,4.764139000000001, '23 Avenue Guy de Collongue, 69130 Écully, France'],
[48.7085753,2.163919, '3 Rue Joliot Curie, 91190 Gif-sur-Yvette, France'],
[36.1027527,-79.50235669999999, '50 Campus Drive, Elon, NC 27244, USA'],
[-2.1481458,-79.9644885, 'Vía Perimetral 5, Guayaquil, Ecuador'],
[51.2473822,6.7916469, 'Münsterstraße 156, 40476 Düsseldorf, Germany'],
[47.72336,13.0871409, 'Urstein Süd 1, 5412 Puch bei Hallein, Austria'],
[-23.6958579,-46.5464383, 'Av. Pereira Barreto, 400 - Baeta Neves, São Bernardo do Campo - SP, 09634-050, Brazil'],
[45.2461012,19.8516968, 'Trg Dositeja Obradovića 6, Novi Sad 106314, Serbia'],
[40.7529512,-73.4267093, '2350 Broadhollow Rd, Farmingdale, NY 11735, USA'],
[-19.8690878,-43.9663841, 'Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte - MG, 31270-901, Brazil'],
[26.3734854,-80.1022151, '777 Glades Rd, Boca Raton, FL 33431, USA'],
[42.7793667,-72.0560856, '40 University Dr, Rindge, NH 03461, USA'],
[26.1546284,91.66469889999999, 'Jalukbari, Guwahati, Assam, India'],
[38.8314875,-77.3119442, '4400 University Dr, Fairfax, VA 22030, USA'],
[38.8977953,-77.0129087, '600 New Jersey Ave NW, Washington, DC 20001, USA'],
[33.753068,-84.38528190000001, 'Atlanta, GA 30302, USA'],
[42.9097484,-85.7630885, 'Michigan, USA'],
[50.8748769,4.7077753, 'Andreas Vesaliusstraat 13, 3000 Leuven, Belgium'],
[21.0056183,105.8433475, '1 Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội, Vietnam'],
[31.7945578,35.2414009, 'Jerusalem'],
[17.445388,78.3482302, 'Near DLF Building, Gachibowli, Hyderabad, Telangana 500032, India'],
[26.5123388,80.2329, 'Kalyanpur, Kanpur, Uttar Pradesh 208016, India'],
[59.3954769,24.6643815, 'Raja 4, 12616 Tallinn, Estonia'],
[45.4376934,12.3223365, 'Santa Croce, 191, 30135 Venezia VE, Italy'],
[41.8348731,-87.6270059, '10 W 35th St, Chicago, IL 60616, USA'],
[41.5333799,-88.0970978, '500 Wilcox St, Joliet, IL 60435, USA'],
[22.3149835,87.3111337, 'IIT Kharagpur, Kharagpur, West Bengal 721302, India'],
[23.8143819,86.44120219999999, 'Police Line, Sardar Patel Nagar, Hirapur, Dhanbad, Jharkhand 826004, India'],
[39.1745704,-86.5129458, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[39.1745704,-86.5129458, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[18.487876,-69.96229199999999, 'Av. de Los Próceres 49, Santo Domingo 10602, Dominican Republic'],
[17.445388,78.3482302, 'Near DLF Building, Gachibowli, Hyderabad, Telangana 500032, India'],
[52.2766124,104.2777287, 'Ulitsa Karla Marksa, 1, Irkutsk, Irkutskaya oblast, Russia, 664003'],
[22.4990964,88.37167629999999, 'Raja Subodh Chandra Mallick Rd, Jadavpur, Kolkata, West Bengal 700032, India'],
[17.49328,78.39163839999999, 'Ashok Nagar, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500085, India'],
[28.540214,77.1661949, 'New Mehrauli Road, New Delhi, Delhi 110067, India'],
[32.4950392,35.9912257, 'Ar Ramtha, Irbid، Jordan'],
[39.1974437,-96.5847249, 'Manhattan, KS 66506, USA'],
[42.290035,-85.598145, '1200 Academy St, Kalamazoo, MI 49006, USA'],
[54.9039509,23.9594779, 'Studentų g. 65, Kaunas 51369, Lithuania'],
[54.898991,23.912825, 'K. Donelaičio g. 73, Kaunas 44249, Lithuania'],
[55.790447,49.1214349, 'Kremlyovskaya St, 18, Kazan, Respublika Tatarstan, Russia, 420008'],
[41.1490629,-81.34146489999999, '800 E Summit St, Kent, OH 44240, USA'],
[13.6511842,100.4941512, '126 Pracha Uthit Rd, Khwaeng Bang Mot, Khet Thung Khru, Krung Thep Maha Nakhon 10140, Thailand'],
[50.4488824,30.4572542, 'просп. Перемоги, 37, Kyiv, Ukraine, 03056'],
[50.4488824,30.4572542, 'просп. Перемоги, 37, Kyiv, Ukraine, 03056'],
[50.4420868,30.5104023, 'Volodymyrska St, 60, Kyiv, Ukraine, 01033'],
[46.4667708,-80.9742332, '935 Ramsey Lake Rd, Sudbury, ON P3E 2C6, Canada'],
[51.7537146,19.4517176, 'Stefana Żeromskiego 116, 90-924 Łódź, Poland'],
[49.8406108,24.0225099, 'Universytetska St, 1, Lviv, Lviv Oblast, Ukraine, 79000'],
[42.701848,-84.4821719, '220 Trowbridge Rd, East Lansing, MI 48824, USA'],
[13.0660293,80.28317190000001, 'Navalar Nagar, Chepauk, Triplicane, Chennai, Tamil Nadu 600005, India'],
[53.4221438,58.9826396, 'Prospekt Karla Marksa, 38, Magnitogorsk, Chelyabinskaya oblast, Russia, 455000'],
[34.304073,48.8452846, 'Hamadan Province, Malayer, University Blvd, Iran'],
[39.4145456,-81.4491067, '215 5th St, Marietta, OH 45750, USA'],
[24.4330231,54.619113, 'Near Home WTC AUH, Airport Road، Masdar City - Abu Dhabi - United Arab Emirates'],
[44.8195126,20.459315, 'Studentski trg 16, Beograd 105104, Serbia'],
[42.701848,-84.4821719, '220 Trowbridge Rd, East Lansing, MI 48824, USA']
];
