import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Mockup");
    }

    async getHtml() {

      setTimeout( function() {
        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        btn.onclick = function() {
          modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
      }, 500);

      return `
          <!-- Trigger/Open The Modal -->
          <button id="myBtn" class="white-color output-btn help-btn">Help Guide</button>

          <!-- The Modal -->
          <div id="myModal" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
              <span class="close">&times;</span>
              <h1 class="instructions">
                Use ITALICS for <span class="red-color">RED</span> letters.
                <br>BOLD for <span class="yellow-color" style="background-color: black;">YELLOW</span> letters.
                <br>Use 'Header 1' for BIG LETTERS!
                <br>Use 'Header 2' to REDUCE SPACING!
                <br><br><span style="text-decoration: underline">SPECIAL CHARACTERS (WHITE ONLY)</span><br>[www] [ca] [com] [416] [647] [905] [am] [pm] [$]
                <br><br><span style="text-decoration: underline">CUSTOM SMALL LETTERS</span><br>Place [sm] before text, [/sm] after<br>(<span style="text-decoration: underline">ex.</span> Normal[sm]Small[/sm])
                <br><br><span style="text-decoration: underline">SYMBOLS</span><br>[leftarrow] [rightarrow]
              </h1>
            </div>
          </div>

          <div class="input" id="m-in">
            <textarea name="in_text" id="m-in-box" cols="50" rows="10"></textarea>
          </div>
          <div id="m-out-wrapper" style="width: 480px; margin: auto;">
            <div class="output" id="m-out">
            </div>
            <div class="bottom-img-div">
              <img class="bottom-img" style="text-align: center;" src="/static/img/looksigns_btm_banner.png"></img>
            </div>
          </div>
          <div style="display: inline-block;">
            <button class="white-color output-btn" style="margin-right: 20px;" id="m-out-btn" onclick="onSubmit()">Create Mockup</button>
            <button class="white-color output-btn out-img-btn" id="m-out-btn" onclick="outputImage()">Output Image</button>
          </div>
          <div id="canvas-out-wrapper" style="text-align: middle;">
          </div>
      `;
    }
}
