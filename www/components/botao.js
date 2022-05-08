window.onload = function(){
    document.querySelector("#scan").addEventListener('click', function(){
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                if(result.text == '280720550'){
                    document.getElementById('imagem').src = "imgs/Imagem1.jpg";
                    document.querySelector('#informacoes').innerHTML = "<h1>Produto:</h1><h3>iPad Mini Wi-Fi 64Gb - Cinza Espacial</h3>";
                    document.querySelector('#informacoes').innerHTML = "<h2>Valor: R$ 3.499,00<br>Descrição:</h2>Processador A12 Bionic com arquitetura de 64 bits Neural Engine Coprocessador M12 integrado<br><br>Sistema operacional: IOS<br><br>Tamanho da tela: 7.9<br><br>Tecnologia Wi-Fi<br><br>Resolução da câmera:<br>Câmera traseira: 8MP<br>Câmera frontal: 7MP<br><br>GPS: Sim<br><br>Grava vídeos: Sim<br><br>Câmera traseira: Sim<br>Câmera frontal: Sim<br><br>Memória Flash: 64 GB<br><br>Funciona como celular: Não";

                }
                else if(result.text == '989895555'){
                    document.getElementById('imagem').src = "imgs/Imagem2.jpg";
                    document.querySelector('#informacoes').innerHTML = "<h1>Produto:</h1><h3>Samsung Galaxy J8 Dual Chip 4g 64gb Tela 6</h3>";
                    document.querySelector('#informacoes').innerHTML = "<h2>Valor: R$ 1.888,00<br>Descrição:</h2>Velocidade do Processador: 1.8GHz<br><br>Tipo de Processador: Octa Core<br><br>Tamanho (Tela Principal): 153.6mm (6.0)<br><br>Resolução (Tela Principal):1480 x 720 (HD+)<br><br>Câmera Resolução - Câmera Traseira: 16.0 MP + 5.0 MP<br><br>Memória RAM(GB): 4 GB<br><br>Memória Total Interna (GB) - 64 GB<br><br>Memória Disponível (GB) - 50.6 GB";
                }
                else if(result.text == '85236987'){
                    document.getElementById('imagem').src = "imgs/Imagem3.jpg";
                    document.querySelector('#informacoes').innerHTML = "<h1>Produto:</h1><h3> Motorola One XT1941 Branco 64GB</h3>";
                    document.querySelector('#informacoes').innerHTML = "<h2>Valor: R$ 1.499,00<br>Descrição:</h2>Sistema Operacional: Android 8.1 Oreo<br><br>Processador: Qualcomm Snapdragon 625 (MSM8953) Octa-Core de 2.0 GHz<br><br>Memória RAM: 4GB<br><br>Tecnologia: GSM, 3G e 4G<br><br>Memória interna: 64 GB Total (Sendo uma parte usada para o sistema operacional e aplicativos pré-instalados)<br><br>Cor: Branco<br><h2>Características Gerais</h2>Tela: Max Vision e design ao máximo<br><br>Câmera dupla e armazenamento ilimitado<br><br>Android One: primeiro do Brasil, atualizado e seguro<br><br>Carregamento ultrarrápido TurboPowerÚltimas inovações do Google incorporadas<br><br>Leitor Biométrico (Impressão Digital)";
                }
                else if(result.text == '85369877444'){
                    document.getElementById('imagem').src = "imgs/Imagem4.jpg";
                    document.querySelector('#informacoes').innerHTML = "<h1>Produto</h1><h3>Asus Zenfone Max Pro M1</h3>";
                    document.querySelector('#informacoes').innerHTML = "<h2>Valor: R$ 1.199,00<br>Descrição:</h2>Processador: Qualcomm Snapdragon SDM636 1,8 GHz, 2 Mb Cache<br><br>Sistema Operacional: Android 8.1 Oreo<br><br>Memória Ram: 4 Gb<br>Memória Interna: 64 Gb<br>Memória Expansiva: 2TB Sd<br><br>Tela: 6,0 Led Backlight Ips panel (1080x2160)<br><br>Tipo de Chip: Nano - Dual Chip: Sim<br><br>Conectividade: 3G; 4G; Wi-fi<br><br>Resolução da câmera<br>Câmera Frontal: 8MP<br>Câmera Traseira: 16+5MP";
                }
                else{
                    document.querySelector('#informacoes').innerHTML = "<h1>Produto não encontrado</h1>"
                }
                        
            },
            function (error) {
                alert("Scanning failed: " + error);
            },
            {
                preferFrontCamera : false, // iOS and Android
                showFlipCameraButton : true, // iOS and Android
                showTorchButton : true, // iOS and Android
                torchOn: false, // Android, launch with the torch switched on (if available)
                saveHistory: true, // Android, save scan history (default false)
                prompt : "Place a barcode inside the scan area", // Android
                resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                formats : "CODE_39", // default: all but PDF_417 and RSS_EXPANDED
                orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
                disableAnimations : true, // iOS
                disableSuccessBeep: false // iOS and Android
            }
        );
    });
}