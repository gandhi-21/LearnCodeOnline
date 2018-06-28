let myTodos = {
  day: 'Monday',
  meetings: 0,
  meetDone: 0,
  addMeeting: function(meet = 0) {
        this.meetings = this.meetings + meet
  },
  summary: function() {
    return `You have ${this.meetings} meetings today`
  }
}

myTodos.addMeeting(4)
console.log(myTodos.summary())
