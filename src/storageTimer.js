
var TimeStorage = localStorage.getItem('TimeStorage');

if (TimeStorage == null) {
  setTimer()
} else {
  if(new Date(TimeStorage) < new Date()) {
    localStorage.clear()
    setTimer()
  }
}

function setTimer()
{
  const timer=60; //60 minutes
  TimeStorage = new Date();
  TimeStorage.setMinutes(TimeStorage.getMinutes() + timer);
  localStorage.setItem('TimeStorage', TimeStorage);
}