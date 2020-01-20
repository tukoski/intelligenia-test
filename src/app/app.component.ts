import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  private n: number;
  private staircase: string;

  /**
   * Draw a staircase based on the n param
   * @param n number max of the staircase
   */
  drawStaircase(n: number): void {
    this.n = n;
    this.staircase = "\n";

    if (n >= 0 && n <= 100) {
      let hashtag = 1;
      
      for (let i = n; i > 0; i--) {
        for (let j = 0; j < i -1; j++) {
          this.staircase += " ";
        }
        for (let j = 0; j < hashtag; j++) {
          this.staircase += "#";
        }
        this.staircase += "\n";
        hashtag++;
      }
    }
  }
}
