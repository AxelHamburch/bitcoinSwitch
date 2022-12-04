
# +++ bitcoinSwitch Special +++
## Svens PlebTap

#### Der Portal Pin (meist GPIO 4) ist kein Touch Pin mehr, sondern ein PULL UP Eingang, der gegen Null (GND) geschaltet werden muss. Dazu wird ein Leuchtdrucktaster verwendet. Der Taster wird zwischen GPIO 4 und GND angeklemmt. Er übernimmt auch gleichzeitig eine Quittier- und Informationisfunktion über LED.

#### Die LED des Leuchtdrucktaster wird zwischen GPIO 13 und GND angeschlossen. Sie hat folgenden Funktionen:
- Beim Booten signalisiert sie die Abfragezeit (ca. 2 Sek.) während das Portal durch drücken der Taste gestartet werden kann
- Kurz darauf blinkt sie zweimal schnell und signalisiert damit: Wifi gefunden! Das muss aber nicht heißen das er auch das Wallet gefunden hat.
- Nach einem Zahlungseingang leuchtet die LED dauernd => Warten auf Quittierung (Taste Drücken) um Aktion (Bier zapfen) zu starten
- Nach dem Ablauf der Aktion blinkt die LEd erneut zweimal und signalisiert damit wieder Bereitschaft

#### Ansteuerung eines Doppelrelais
- spezielle Relaisboards haben zwei Relais auf einem Board. Für den Beer Tap sollen die gleichzeitig geschaltet werden. Da diese Boards aber auf der Platine verdrahtet sind, muss man beide Relais ansteuern um sie zu schalten. 
- In LNbits kann man aber pro QR-Code nur einen GPIO festlegen, deswegen wird in der Software der nächste GPIO (GPIO X + 1) zusätzlich angesteuert
- Ist unter LNURLDevice der GPIO 16 ausgewählt, wird immer auch immer der nächst höhere, also der GPIO 17 angesteuert 

<br> 
<br> 


<img style="max-width:100%;" src="https://user-images.githubusercontent.com/33088785/166832680-600ed270-cbc9-4749-82f1-c1853b242329.png">

<img style="max-width:100%;" src="https://user-images.githubusercontent.com/33088785/166829474-a28ca2b7-dd3e-46d4-89d3-8a10bf1d3fad.png">

### Flash and configure from browser! https://lnbits.github.io/bitcoinswitch/installer/

> Once flashed, press GPIO4 in few seconds of ESP32 booting up to be able to config

   <table>
  <tr>
    <th><img src="https://user-images.githubusercontent.com/33088785/204107016-bc9473e0-2843-4873-af71-cd934e07f444.gif" alt="Snow" style="width:100%"></th>
    <th><img src="https://user-images.githubusercontent.com/33088785/204107029-cc4ad95b-b130-4b48-9091-86d7be7d4f16.gif" alt="Forest" style="width:100%"></th>
    <th><img src="https://user-images.githubusercontent.com/33088785/204107037-870571f8-b860-4019-93d4-bbdbeaf1091f.gif" alt="Mountains" style="width:100%"></th>
    <th><img src="https://user-images.githubusercontent.com/33088785/204107044-b8a7d94f-6908-40dd-bb82-974e08f077f4.gif" alt="Mountains" style="width:100%"></th>
  </tr>
</table> 

## Compatible with any ESP32 microcontroller.

For use with LNURLDevice in LNbits.

### ✅ $5 worth parts/5min setup

### ✅ Websockets for blazingly fast turning on the things

### ✅ Web-installer/config for easy setup

### ✅ Support for MULTIPLE GPIOS/LNURLs!!!


> <a href="https://twitter.com/arcbtc/status/1585627498510831616">Video tutorial</a>

> Join us! <a href="https://t.me/makerbits">t.me/makerbits</a>

### Complicated install instructions not using browser flashing
- Install <a href="https://www.arduino.cc/en/software">Arduino IDE 1.8.19</a>
- Install ESP32 boards, using <a href="https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html#installing-using-boards-manager">boards manager</a>
![image](https://user-images.githubusercontent.com/33088785/161862832-1269a12e-16ce-427c-9a92-df3ee573a1fb.png)

- Download this repo
- Copy these <a href="libraries">libraries</a> into your Arduino install "libraries" folder
- Open this <a href="bitcoinSwitch.ino">bitcoinSwitch.ino</a> file in the Arduino IDE
- Select the correct ESP32 board from tools>board
- Upload to device

![trigger](https://user-images.githubusercontent.com/33088785/166829947-d0194b32-19fc-4a16-83d3-dc6f9af9337c.gif)
