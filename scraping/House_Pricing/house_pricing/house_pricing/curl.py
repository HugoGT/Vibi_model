#############################
#######    MITULA    ########

home_curl = '''curl 'https://casas.mitula.pe/mobileapi/v3/autocompleteLocationsWeb?q={}' \
                -H 'authority: casas.mitula.pe' \
                -H 'accept: application/json, text/javascript, */*; q=0.01' \
                -H 'accept-language: en-US,en;q=0.9' \
                -H 'adtype: 1' \
                -H 'content-type: application/json; charset=UTF-8' \
                -H 'cookie: _mitula_user_id=6fccca3e-0fa5-4680-a5aa-03220076c113; _id_utr_=1024D0A4F32DA3E18C74146F65FF7CFF.2; _v_id_=020a4770-d1cf-4ef8-9b5d-c63edd1bc2e6; Origin=1; MGRef=1; JSESSIONID=C3EFFFBC40284347ACBBFFE3C4EF8552.worker2; _abus_="lima::1693082284537:n"; t_pvid=1bfaad15-ec40-41de-b5b1-c17d2602b84c; t_or=1; page=1; _bsl_="lima|1692995882956&arequipa|1692996037733:"; _s_id=244ffb67-764a-41b7-bd27-6203c0164f72; _ppd=o_s_0|o_f_1|l1_f_Arequipa|l1_s_Arequipa; _buq_re="rO0ABXNyABFqYXZhLnV0aWwuSGFzaE1hcAUH2sHDFmDRAwACRgAKbG9hZEZhY3RvckkACXRocmVzaG9sZHhwP0AAAAAAAAx3CAAAABAAAAACdAAEbGltYXNyABFqYXZhLmxhbmcuSW50ZWdlchLioKT3gYc4AgABSQAFdmFsdWV4cgAQamF2YS5sYW5nLk51bWJlcoaslR0LlOCLAgAAeHAAAAAFdAAIYXJlcXVpcGFzcQB+AAMAAAABeA=="' \
                -H 'countryid: 15' \
                -H 'platform: Desktop' \
                -H 'product: Mitula' \
                -H 'referer: https://casas.mitula.pe/' \
                -H 'requestdate: 20230825' \
                -H 'sec-ch-ua: "Chromium";v="116", "Not)A;Brand";v="24", "Brave";v="116"' \
                -H 'sec-ch-ua-mobile: ?0' \
                -H 'sec-ch-ua-platform: "Linux"' \
                -H 'sec-fetch-dest: empty' \
                -H 'sec-fetch-mode: cors' \
                -H 'sec-fetch-site: same-origin' \
                -H 'sec-gpc: 1' \
                -H 'token: YHQm1YqdyQOHHInvkpvACT4+DHWVG6Mp' \
                -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36' \
                -H 'x-requested-with: XMLHttpRequest' \
                --compressed'''

level1 = 'https://casas.mitula.pe/searchRE/nivel1-{}/op-1/q-{}'
level2 = 'https://casas.mitula.pe/searchRE/nivel2-{}/nivel1-{}/op-1/q-{}'
level3 = 'https://casas.mitula.pe/searchRE/nivel3-{}/nivel2-{}/nivel1-{}/op-1/q-{}'

##############################
#######    URBANIA    ########

urbania_curl = '''curl 'https://urbania.pe/buscar/venta-de-propiedades?page={}' \
                    -H 'authority: urbania.pe' \
                    -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8' \
                    -H 'accept-language: en-US,en;q=0.9' \
                    -H 'cookie: sessionId=a82b37cb-644f-444d-a4a5-579be29ba76d; __cf_bm=y..iH3F1N0Vo4T9SWt8ehQODir8JTPmHzPvTOtAF9Bg-1693238726-0-AcbhANm43qoDEEJsoNLX7TXu3GzzCnsisDxUVlDzFAbSx/YJNiuxy5Uhaio95EuPcnVvKL8arwGZw9fkrHEiR0Yi49BXOZRANpBvi1lGbH0p; cf_clearance=UjqrsbW6oNQ.FlepouSYT_Ea2T1nh4himStVZTcaQ8Q-1693238728-0-1-17998bff.81b8019f.4098d41f-160.2.1693238728; idUltimoAvisoVisto=65778019; JSESSIONID=720181DCE1688BDB1906CAB223F2E1EA' \
                    -H 'sec-ch-ua: "Chromium";v="116", "Not)A;Brand";v="24", "Brave";v="116"' \
                    -H 'sec-ch-ua-mobile: ?0' \
                    -H 'sec-ch-ua-platform: "Linux"' \
                    -H 'sec-fetch-dest: document' \
                    -H 'sec-fetch-mode: navigate' \
                    -H 'sec-fetch-site: none' \
                    -H 'sec-fetch-user: ?1' \
                    -H 'sec-gpc: 1' \
                    -H 'upgrade-insecure-requests: 1' \
                    -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36' \
                    --compressed'''

property_curl = '''curl '{}' \
                    -H 'authority: urbania.pe' \
                    -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8' \
                    -H 'accept-language: en-US,en;q=0.9' \
                    -H 'cache-control: max-age=0' \
                    -H 'cookie: sessionId=a82b37cb-644f-444d-a4a5-579be29ba76d; cf_clearance=UjqrsbW6oNQ.FlepouSYT_Ea2T1nh4himStVZTcaQ8Q-1693238728-0-1-17998bff.81b8019f.4098d41f-160.2.1693238728; __cf_bm=cmu4fkIPlAysoCb5omLxFbWtRq5Ivfgz6Hp64ioNDiI-1693240795-0-AWXbTYdTlPv0i/qsMGRPQkifXsERSB/VhZcuIwjTls9kufNc6ZlMPvEgIlDNjwNnflF56Ua3p98M9Yq4GScRJyyYeMxlK4OK7157gJ+8sxP8; JSESSIONID=DF60DCB382AF13235992D6EEC8D4BE68; idUltimoAvisoVisto=90260185' \
                    -H 'referer: https://urbania.pe/buscar/venta-de-propiedades?page=100' \
                    -H 'sec-ch-ua: "Chromium";v="116", "Not)A;Brand";v="24", "Brave";v="116"' \
                    -H 'sec-ch-ua-mobile: ?0' \
                    -H 'sec-ch-ua-platform: "Linux"' \
                    -H 'sec-fetch-dest: document' \
                    -H 'sec-fetch-mode: navigate' \
                    -H 'sec-fetch-site: same-origin' \
                    -H 'sec-fetch-user: ?1' \
                    -H 'sec-gpc: 1' \
                    -H 'upgrade-insecure-requests: 1' \
                    -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36' \
                    --compressed'''