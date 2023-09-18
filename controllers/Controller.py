from odoo import http

class EmployeeDetails(http.Controller):

    @http.route('/employee/', auth="public", type="json", methods=['POST'])
    def all_employees(self):
        employees = http.request.env['employee.data'].search_read([], ['ename','eprofile', 'ecode','emonthlysalary'])
        print(employees,"--------------------------------")
        return employees