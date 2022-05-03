function  get_translate(str_to_translate,element) {
    if (str_to_translate !== undefined) {
    $.get('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=fr&dt=t&q='+str_to_translate,
        function(res){
            if (typeof res == 'object' && res[0].length > 0) {
            res[0].map(function(tr) {
                    if(tr != undefined && tr[0] != undefined) 
                    {
                        $(element).val(tr[0]);
                    }
                });
            }
        });
    }	
};
$('.input_translation').each((i,e)=>
{
let old_value=$(e).val();

 get_translate(old_value,e);

})
