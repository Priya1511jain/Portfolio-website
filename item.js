  <script>
            var tabs = document.getElementsByClassName("tabs");
            var tabcontents = document.getElementsByClassName("tabcontents");

        function opentab(tabname){
           for(tab of tabs){
               tab.classList.remove("active-link");
            }
           for(tabcontent of tabcontents){
              tabcontent.classList.remove("active-tab");
              }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

     </script>
