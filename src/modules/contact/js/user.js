function sendcontact(c){var a=document.getElementById("fname"),d=document.getElementById("femail_iavim"),e=document.getElementById("ftitle"),f=document.getElementById("fcon"),b=document.getElementById("btsend");document.getElementById("fcontact");b.disabled=!0;if(2>a.value.length)return alert(nv_fullname),b.disabled=!1,a.focus(),!1;if(!nv_mailfilter.test(d.value))return alert(nv_email),b.disabled=!1,d.focus(),!1;if(2>e.value.length)return alert(nv_title),b.disabled=!1,e.focus(),!1;if(2>f.value.length)return alert(nv_content),
b.disabled=!1,f.focus(),!1;a=document.getElementById("fcode_iavim");return a.value.length!=c||!nv_namecheck.test(a.value)?(alert(nv_code),nv_change_captcha("vimg","fcode_iavim"),b.disabled=!1,a.focus(),!1):!0}function nv_ismaxlength(c,a){c.value.length<a&&(c.value=c.value.substring(0,a))};