const MenuController = require('../controllers/MenuController.js');

describe('MenuController', () => {

  beforeEach(() => {
    this.menu = new MenuController();
  })

  describe('#reminder()', () => {

    it('Should remind you about learning',() => {
      expect(this.menu.remindMe()).toBe('Learning is a life-long pursuit');
    })

  })
})
