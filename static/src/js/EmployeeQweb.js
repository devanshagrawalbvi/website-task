// odoo.define("website_task.EmpDetail", function (require) {
//   "use strict";

//   const publicWidget = require("web.public.widget");
//   const core = require("web.core");
//   const QWeb = core.qweb;

//   publicWidget.registry.EmpDetail = publicWidget.Widget.extend({
//     selector: ".emp-data",
//     start() {
//       // let empRow = this.el.querySelector("#yh-cities-row");
//       // const self = this;
//       start() {
//         const self = this;
//         this._rpc({
//             route: '/employee/',
//             params: {},
//         }).then(data => {
//             const items = data.items;
//             const $snippet = $(QWeb.render('custom_website.dynamic_snippet_template', {
//                 items: items,
//             }));
//             self.$el.append($snippet);
//         });

//         return this._super(...arguments);
//   ),});
//       });

//       // if (empRow) {
//       //   this._rpc({
//       //     route: "/cities/",
//       //     params: {},
//       //   }).then((data) => {
//       //   //   data.forEach((emp) => {
//       //       this.$createModal = $(QWeb.render("qwebtemplate"));
//       //   //   }
//       //   //   );
//       //   });
//       // }
/**odoo-modules */
odoo.define('website_task.EmpData', function (require) {
  'use strict';
  const publicWidget = require('web.public.widget');
  const core = require('web.core');
  const QWeb = core.qweb;

  publicWidget.registry.EmpData = publicWidget.Widget.extend({
      selector: '.emp-data',
      events: {
      },
      start() {
          const self = this;
          this._rpc({
              route: '/employee/',
              params: {},
          }).then(data => {
              const items = data.items;
              console.log(data)
              self.$target.replaceWith(QWeb.render('website_task.qwebtemplate', {
                  items: data,
              }));
              // self.$target(snippet);
          });

          return publicWidget.registry.EmpData;
      },
  });
});
