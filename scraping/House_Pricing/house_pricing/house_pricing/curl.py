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