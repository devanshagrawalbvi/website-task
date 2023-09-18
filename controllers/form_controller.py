from requests import post
from odoo import http
from odoo.http import request

class CustomForm(http.Controller):
    @http.route(['/employee/form'], type='http', auth="public", website=True, csrf=False)
    def custom_form(self, **post):
        print("WERTYU------------------")
        return http.request.render("website_task.custom_form_template", {})
    
    @http.route(['/employee/data/submit'], type='http', auth="user", website=True, csrf=False)
    def customer_form_submit(self,**post):

        if request.env.user.partner_id:
            employee = http.request.env['employee.data'].sudo().create({
                'ecode': post.get('empcode'),
                'ename': post.get('name'),
                'emonthlysalary': post.get('salary'),
            })
            vals = {
                'employee': employee,
            }

            return request.render("website_task.success_template", vals)
        else:
            return "Please register or login..."