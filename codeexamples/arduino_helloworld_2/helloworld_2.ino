int ledPin = 9;
int buttonPin = 7;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT);

  digitalWrite(ledPin,LOW);
  Serial.begin(9600);
}

void loop() {
  int buttonStatus = digitalRead(buttonPin);

  if (buttonStatus == HIGH) {
     digitalWrite(ledPin,HIGH);
     //Serial.println("High");
  } else {
     digitalWrite(ledPin,LOW);
     //Serial.println("Low");
  }      


}
