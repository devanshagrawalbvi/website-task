/** @odoo-module **/
import publicWidget from "web.public.widget";
publicWidget.registry.formButtonDevansh = publicWidget.Widget.extend({
  selector: "#wrapwrap",
  events: {
    "click #sub_button": "click",
  },
  click(e) {
    e.preventDefault();

    this._rpc({
      route: "/employee/data/submit",
      params: { ename: "Devansh", ecode: "0000" },
    }).then((data) => {
      console.log(data, "sdfghjkldfghjkl");
      var popup = this.$el.find("#popupmodal");
      console.log(popup, "ppp");
      this.$el.find("#exampleModalLabel")[0].innerHTML = data.message;
      this.$el.find("#modal-body")[0].innerHTML = data.body;
      console.log(data.s_tatus);
      popup.modal("show");
      if (data.s_tatus) {
        this.$el.find("#submit_form")[0].innerHTML = "OKAY";
        this.$el.find("#submit_form")[0].onclick = function () {
          popup.modal("hide");
        };
      } else {
        console.log($("#submit_form"), this.$el);
        this.$el.find("#submit_form")[0].innerHTML = "Login";
        this.$el.find("#submit_form")[0].onclick = function () {
          window.location = "http://localhost:8069/web/login";
        };
      }
    });
  },
});
