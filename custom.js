$(document).ready(function(){
    $("#country_form").change(function(){
        var name =$("#country_form").val();
        $(".details").hide();
        $("."+name).show();

    });


});

//   function populate(s1,s2){
//       var s1 = document.getElementById(s1);
//       var s2 = document.getElementById(s2);
//     s2.innerHTML = "";
//     if(s1.value == "Barisal"){
//       var optionArray = ['optionselect| <option value="">... Select District ➟   ...</option>' ,'Feni | Feni','Brahmanbaria | Brahmanbaria','Rangamati | Rangamati','FNoakhalieni | Noakhali','Chandpur | Chandpur','Lakshmipur | Lakshmipur','Chattogram | Chattogram','Coxsbazar | Coxsbazar','Khagrachhari | Khagrachhari','Bandarban | Bandarban'];
//     }
//     else if( s1.value == "Chittagong")
//     {
//       var optionArray = ['optionselect| <option value="">... Select District ➟   ...</option>' ,'Feni | Feni','Brahmanbaria | Brahmanbaria','Rangamati | Rangamati','FNoakhalieni | Noakhali','Chandpur | Chandpur','Lakshmipur | Lakshmipur','Chattogram | Chattogram','Coxsbazar | Coxsbazar','Khagrachhari | Khagrachhari','Bandarban | Bandarban'];
//     }
//     else if( s1.value == "Dhaka")
//     {
//       var optionArray = ['optionselect| <option value="">... Select District ➟   ...</option>' ,'Feni | Feni','Brahmanbaria | Brahmanbaria','Rangamati | Rangamati','FNoakhalieni | Noakhali','Chandpur | Chandpur','Lakshmipur | Lakshmipur','Chattogram | Chattogram','Coxsbazar | Coxsbazar','Khagrachhari | Khagrachhari','Bandarban | Bandarban'];
//     }
//     else if( s1.value == "Khulna")
//     {
//       var optionArray = ['optionselect| <option value="">... Select District ➟   ...</option>' ,'Feni | Feni','Brahmanbaria | Brahmanbaria','Rangamati | Rangamati','FNoakhalieni | Noakhali','Chandpur | Chandpur','Lakshmipur | Lakshmipur','Chattogram | Chattogram','Coxsbazar | Coxsbazar','Khagrachhari | Khagrachhari','Bandarban | Bandarban'];
//     }
//     else if( s1.value == "Mymensingh")
//     {
//       var optionArray = ['optionselect| <option value="">... Select District ➟   ...</option>' ,'Feni | Feni','Brahmanbaria | Brahmanbaria','Rangamati | Rangamati','FNoakhalieni | Noakhali','Chandpur | Chandpur','Lakshmipur | Lakshmipur','Chattogram | Chattogram','Coxsbazar | Coxsbazar','Khagrachhari | Khagrachhari','Bandarban | Bandarban'];
//     }
//     else if( s1.value == "Rajshahi")
//     {
//       var optionArray = ['optionselect| <option value="">... Select District ➟   ...</option>' ,'Feni | Feni','Brahmanbaria | Brahmanbaria','Rangamati | Rangamati','FNoakhalieni | Noakhali','Chandpur | Chandpur','Lakshmipur | Lakshmipur','Chattogram | Chattogram','Coxsbazar | Coxsbazar','Khagrachhari | Khagrachhari','Bandarban | Bandarban'];
//     }
//     else if( s1.value == "Rangpur")
//     {
//       var optionArray = ['optionselect| <option value="">... Select District ➟   ...</option>' ,'Feni | Feni','Brahmanbaria | Brahmanbaria','Rangamati | Rangamati','FNoakhalieni | Noakhali','Chandpur | Chandpur','Lakshmipur | Lakshmipur','Chattogram | Chattogram','Coxsbazar | Coxsbazar','Khagrachhari | Khagrachhari','Bandarban | Bandarban'];
//     }
//     else if( s1.value == "Sylhet")
//     {
//       var optionArray = ['optionselect| <option value="">... Select District ➟   ...</option>' ,'Feni | Feni','Brahmanbaria | Brahmanbaria','Rangamati | Rangamati','FNoakhalieni | Noakhali','Chandpur | Chandpur','Lakshmipur | Lakshmipur','Chattogram | Chattogram','Coxsbazar | Coxsbazar','Khagrachhari | Khagrachhari','Bandarban | Bandarban'];
//     }
    //2nd quert
        //     if(s2.value == "Feni"){
        //     var Array = ['optionselect| <option value="">... Select Thana ➟   ...</option>' ,'Rangunia | Rangunia','Sitakunda | Sitakunda','Mirsharai | Mirsharai','Patiya | Patiya','Sandwip | Sandwip','Banshkhali | Banshkhali','Boalkhali | Boalkhali','Anwara | Anwara','Satkania | Satkania','Satkania | Satkania','Hathazari | Hathazari','Monohargonj | Monohargonj','Fatikchhari | Fatikchhari','Titas | Titas','Raozan | Raozan','Karnafuli | Karnafuli'];
        //   }
        //   else if( s2.value == "Brahmanbaria")
        //   {
        //     var Array = ['optionselect| <option value="">... Select Thana ➟   ...</option>' ,'Rangunia | Rangunia','Sitakunda | Sitakunda','Mirsharai | Mirsharai','Patiya | Patiya','Sandwip | Sandwip','Banshkhali | Banshkhali','Boalkhali | Boalkhali','Anwara | Anwara','Satkania | Satkania','Satkania | Satkania','Hathazari | Hathazari','Monohargonj | Monohargonj','Fatikchhari | Fatikchhari','Titas | Titas','Raozan | Raozan','Karnafuli | Karnafuli'];
        //   }
        //   else if( s2.value == "Rangamati")
        //   {
        //     var Array = ['optionselect| <option value="">... Select Thana ➟   ...</option>' ,'Rangunia | Rangunia','Sitakunda | Sitakunda','Mirsharai | Mirsharai','Patiya | Patiya','Sandwip | Sandwip','Banshkhali | Banshkhali','Boalkhali | Boalkhali','Anwara | Anwara','Satkania | Satkania','Satkania | Satkania','Hathazari | Hathazari','Monohargonj | Monohargonj','Fatikchhari | Fatikchhari','Titas | Titas','Raozan | Raozan','Karnafuli | Karnafuli'];
        //   }
        //   else if( s2.value == "Noakhali")
        //   {
        //     var Array = ['optionselect| <option value="">... Select Thana ➟   ...</option>' ,'Rangunia | Rangunia','Sitakunda | Sitakunda','Mirsharai | Mirsharai','Patiya | Patiya','Sandwip | Sandwip','Banshkhali | Banshkhali','Boalkhali | Boalkhali','Anwara | Anwara','Satkania | Satkania','Satkania | Satkania','Hathazari | Hathazari','Monohargonj | Monohargonj','Fatikchhari | Fatikchhari','Titas | Titas','Raozan | Raozan','Karnafuli | Karnafuli'];
        //   }
        //   else if( s2.value == "Chandpur")
        //   {
        //     var Array = ['optionselect| <option value="">... Select Thana ➟   ...</option>' ,'Rangunia | Rangunia','Sitakunda | Sitakunda','Mirsharai | Mirsharai','Patiya | Patiya','Sandwip | Sandwip','Banshkhali | Banshkhali','Boalkhali | Boalkhali','Anwara | Anwara','Satkania | Satkania','Satkania | Satkania','Hathazari | Hathazari','Monohargonj | Monohargonj','Fatikchhari | Fatikchhari','Titas | Titas','Raozan | Raozan','Karnafuli | Karnafuli'];
        //   }
        //   else if( s2.value == "Lakshmipur")
        //   {
        //     var Array = ['optionselect| <option value="">... Select Thana ➟   ...</option>' ,'Rangunia | Rangunia','Sitakunda | Sitakunda','Mirsharai | Mirsharai','Patiya | Patiya','Sandwip | Sandwip','Banshkhali | Banshkhali','Boalkhali | Boalkhali','Anwara | Anwara','Satkania | Satkania','Satkania | Satkania','Hathazari | Hathazari','Monohargonj | Monohargonj','Fatikchhari | Fatikchhari','Titas | Titas','Raozan | Raozan','Karnafuli | Karnafuli'];
        //   }
        //   else if( s2.value == "Chattogram")
        //   {
        //     var Array = ['optionselect| <option value="">... Select Thana ➟   ...</option>' ,'Rangunia | Rangunia','Sitakunda | Sitakunda','Mirsharai | Mirsharai','Patiya | Patiya','Sandwip | Sandwip','Banshkhali | Banshkhali','Boalkhali | Boalkhali','Anwara | Anwara','Satkania | Satkania','Satkania | Satkania','Hathazari | Hathazari','Monohargonj | Monohargonj','Fatikchhari | Fatikchhari','Titas | Titas','Raozan | Raozan','Karnafuli | Karnafuli'];
        //   }
        //   else if( s2.value == "Coxsbazar")
        //   {
        //     var Array = ['optionselect| <option value="">... Select Thana ➟   ...</option>' ,'Rangunia | Rangunia','Sitakunda | Sitakunda','Mirsharai | Mirsharai','Patiya | Patiya','Sandwip | Sandwip','Banshkhali | Banshkhali','Boalkhali | Boalkhali','Anwara | Anwara','Satkania | Satkania','Satkania | Satkania','Hathazari | Hathazari','Monohargonj | Monohargonj','Fatikchhari | Fatikchhari','Titas | Titas','Raozan | Raozan','Karnafuli | Karnafuli'];
        //   }
        //   else if( s2.value == "Khagrachhari")
        //   {
        //     var Array = ['optionselect| <option value="">... Select Thana ➟   ...</option>' ,'Rangunia | Rangunia','Sitakunda | Sitakunda','Mirsharai | Mirsharai','Patiya | Patiya','Sandwip | Sandwip','Banshkhali | Banshkhali','Boalkhali | Boalkhali','Anwara | Anwara','Satkania | Satkania','Satkania | Satkania','Hathazari | Hathazari','Monohargonj | Monohargonj','Fatikchhari | Fatikchhari','Titas | Titas','Raozan | Raozan','Karnafuli | Karnafuli'];
        //   }
        //   else if( s2.value == "Bandarban")
        //   {
        //     var Array = ['optionselect| <option value="">... Select Thana ➟   ...</option>' ,'Rangunia | Rangunia','Sitakunda | Sitakunda','Mirsharai | Mirsharai','Patiya | Patiya','Sandwip | Sandwip','Banshkhali | Banshkhali','Boalkhali | Boalkhali','Anwara | Anwara','Satkania | Satkania','Satkania | Satkania','Hathazari | Hathazari','Monohargonj | Monohargonj','Fatikchhari | Fatikchhari','Titas | Titas','Raozan | Raozan','Karnafuli | Karnafuli'];
        //   }
   
//     for(var option in optionArray)
//     {
//       var pair = optionArray[option].split('|');
//       var newoption = document.createElement("option");
//       newoption.value = pair[0];
//       newoption.innerHTML=pair[1];
//        removeAll();
//       s2.options.add(newoption);
     
//     }
// }

  
