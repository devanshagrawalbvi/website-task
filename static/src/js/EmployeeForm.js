/** @odoo-module **/
import publicWidget from "web.public.widget";
("use strict");
publicWidget.registry.formSubmitButton = publicWidget.Widget.extend({
  selector: "#wrapwrap",
  events: {
    "click #sub_button": "click",
  },
  click(e) {
    e.preventDefault();
    this._rpc({
      route: "/employee/data/submit",
      params: {
        ecode: this.$el.find("#myForm")[0][0].value,
        ename: this.$el.find("#myForm")[0][1].value,
        emonthlysalary: this.$el.find("#myForm")[0][2].value,
      },
    }).then((data) => {
      var popup = this.$el.find("#popupmodal");
      popup.modal("show");
      this.$el.find("#exampleModalLabel")[0].innerHTML = data.message;
      this.$el.find("#modal-body")[0].innerHTML = data.body;
      console.log(data.s_tatus);
      if (data.s_tatus) {
        this.$el.find("#submit_form")[0].innerHTML = "Close";
        this.$el.find("#submit_form")[0].onclick = function () {
          popup.modal("hide");
        };
      } else {
        console.log($("#submit_form"), this.$el);
        this.$el.find("#submit_form")[0].innerHTML = "Login";
        this.$el.find("#submit_form")[0].onclick = function () {
          window.location = "http://localhost:8069/web/login";
        };
        // this.$el.find("#submit_form")[0].innerHTML = "Sign Up";
        // this.$el.find("#submit_form")[0].onclick = function () {
        //   window.location = "http://localhost:8069/web/signup";
        // };
      }
    });
  },
});
