/** @odoo-module **/
import publicWidget from "web.public.widget";

publicWidget.registry.EmpDetail = publicWidget.Widget.extend({
  selector: ".emp-data",
  start() {
    let empRow = this.el.querySelector("#yh-cities-row");

    if (empRow) {
      this._rpc({
        route: "/employee/",
        params: {},
      }).then((data) => {
        let html = ``;
        data.forEach((emp) => {
          html += `
          <div class="card" style="width: 15rem;">
              <div class="card-body">
                <h5 class="card-title">${emp.ename} <br/>Emp Code -${emp.ecode}</h5>
                <p class="card-text">${emp.emonthlysalary} - ${emp.esalary}</p>
                <a href="#" class="btn btn-primary">Contact</a>
              </div>
          </div>`;
        });
        empRow.innerHTML = html;
      });
    }
  },
});

export default publicWidget.registry.EmpDetail;
