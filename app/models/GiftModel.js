export class Gift {
  constructor(data) {
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened
    this.id = data.id
  }

  get giftTemplate() {
    return `
     <div onclick="app.sandBoxController.openGift('${this.id}')" class="col-md-4 gap-3 mb-2"><img
                src="${this.url}"
                alt="gift box" id="gift-img">
              <span>${this.tag}</span>
              </div>
    `
  }
}