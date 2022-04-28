get_translate = function(str_to_translate) {
				if (str_to_translate !== undefined) {
					$.get('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ar&dt=t&q='+str_to_translate,
					function(res){
						var id, txt;
						if (typeof res == 'object' && res[0].length > 0) {
						res[0].map(function(tr) {

								id = tr[1].split('_._')[0].replace('#', '').trim();


                                if (tr[0] != tr[1]) {
									txt = tr[0].trim().replace("\n", '').split('_._');
									txt = txt[1] !== undefined ? txt[1].trim() : txt[0].trim();
									txt = txt.replace(/\"\-\"/g, '.');
                                    console.log(txt);
								} 

							});
							
							
							
						}
						
						
					});
				}	
			};
