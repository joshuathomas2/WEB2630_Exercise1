new Vue({
  el: '#exercise',
  data: {
    array: ['Rich', 'Cody', 'Kole', 'Alex'],
    name: 'Josh',
    age: 22,
    value: "",
    progressBarWidth: 0,
    effect: false,
    progressBarStyle: {
      width: this.progressBarWidth + 'px'
    },
    hidden: true,
    tastyBands: ["King Crimson", "Blue Oyster Cult", "The Moody Blues", "National Health"]
  },
  methods: {
    startEffect: function () {
      setInterval(this.getEffectClass, 1000);
    },
    startProgress: function () {
      setInterval(this.updateProgress, 1000);
    },
    randomFloat: function() {
      return Math.random();
    },
    sendAlert: function() {
      alert("Alert!");
    },
    getValue: function(event) {
      this.value = event.target.value;
    },
    updateProgress: function () {
      if (this.progressBarWidth == 100) {
        this.progressBarWidth = 0;
      } else {
        this.progressBarWidth += 10;
      }
      console.log(this.progressBarStyle.width);
    },
    getProgressBarWidth: function() {
      console.log("width: " + this.progressBarWidth);

    },
    getEffectClass: function() {
      this.effect = !this.effect;
      console.log("effect: " + this.effect);

    },
    toggleHidden: function() {
      this.hidden = !this.hidden;
    }
  }
});