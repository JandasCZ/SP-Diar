const kontejner = document.getElementById("kontejner");
        const tlacitkoPridat = document.getElementById("buttonPridat");
        let hodnota = 1;

        function pridatElement() {
            const currentDate = new Date().toDateString();

            const container = document.createElement('div');
            container.className = 'cont';

            const text = document.getElementById("textbox1");
            const output = document.createTextNode(`Záznam ${currentDate}: ${text.value}`);
            output.id = `text${hodnota}`;
            
            const myBr = document.createElement('br');
            myBr.id = `br${hodnota}`;

            if(text.value != "" && text.value != null){
                const buttonOdebrat = document.createElement('button');
            buttonOdebrat.textContent = 'Odebrat';
            buttonOdebrat.onclick = function() {
                removeContainer(this);
            };

            container.appendChild(output);
            container.appendChild(myBr);
            container.appendChild(buttonOdebrat);

            kontejner.appendChild(container);
            hodnota++;
            }
            else{
                alert("Nezadal jsi text!")
            }

        }

        function removeContainer(button) {
            const container = button.parentNode;
            container.remove();
            hodnota--;
        }