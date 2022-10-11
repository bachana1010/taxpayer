from flask import Blueprint, render_template, flash, request, jsonify, session,redirect, url_for
from flask_login import logout_user, login_required, current_user
from app.services.currency import currency_course
from app.models import SmallBussines, Property, \
    property_property_base, vat_tax_base, income
from app import db



calculator_blueprint = Blueprint('calculator', __name__,
                                 template_folder="templates",
                                 static_folder="templates/static")


@calculator_blueprint.route('/', methods=['GET'])
def home():
    return render_template('home.html')


@calculator_blueprint.route('/calculator', methods=['GET'])
def calculator():
    req_pas = request.path
    templs = ["calculator.html", "base.html"]

    return render_template(templs, req_pas=req_pas)


@calculator_blueprint.route('/importTax', methods=['GET'])
def import_tax():
    req_pas = request.path

    templs = ["taximport.html", "base.html"]

    return render_template(templs, req_pas=req_pas)


@calculator_blueprint.route('/currency', methods=['POST', 'GET'])
def currency():
    currency_api = currency_course()

    return jsonify({
            'currencies': currency_api.get_specific_currencies()
        })


@calculator_blueprint.route('/welcome', methods=['GET', 'POST'])
@login_required
def welcome():
    req_pas = request.path
    templs = ["welcome.html", "base.html"]

    return render_template(templs, req_pas=req_pas)


@calculator_blueprint.route('/small_api', methods=['POST'])
def small_api():
    if request.method == "POST":
        params = request.get_json()
        user = SmallBussines(payer_id=current_user.id,
                             amount=params['tax_first_input'],
                             month=params['list_month'],
                             tax_amount=params['tax_amount_small'])

        db.session.add(user)
        try:
            db.session.commit()
        except Exception as e:
            db.session.rollback()

    return jsonify()


@calculator_blueprint.route('/property_api', methods=['POST'])
def property():
    if request.method == "POST":
        params = request.get_json()

        user = Property(payer_id=current_user.id,
                        land_hectare=params['land_input'],
                        Year=params['list_year'],
                        City=params['list_city'],
                        tax_amount=params['land_label'])

        db.session.add(user)
        try:
            db.session.commit()
        except Exception as e:
            db.session.rollback()

    return jsonify()


@calculator_blueprint.route('/Property_property_api', methods=['POST'])
def property_property():
    if request.method == "POST":
        params = request.get_json()

        user = property_property_base(payer_id=current_user.id,
                                      income_money=params['property_income_input'],
                                      property_cost=params['property_value_input'],
                                      year=params['list_year'],
                                      tax_amount=params['land_label1'])

        db.session.add(user)
        try:
            db.session.commit()
        except Exception as e:
            db.session.rollback()

    return jsonify()


@calculator_blueprint.route('/vat_tax_api', methods=['POST'])
def vat_tax():

    if request.method == "POST":
        params = request.get_json()

        user = vat_tax_base(payer_id=current_user.id,
                            taxable_amount=params['vat_tax_amount'],
                            last_tax=params['last_vat_tax'],
                            month=params['vat_month'],
                            tax_amount=params['vat_label'])

        db.session.add(user)
        try:
            db.session.commit()
        except Exception as e:
            db.session.rollback()

    return jsonify()


@calculator_blueprint.route('/income_tax_api', methods=['POST'])
def income_tax():

    if request.method == "POST":
        params = request.get_json()

        user = income(payer_id=current_user.id,
                      gross_income=params['income_gross'],
                      deductions=params['income_deductions'],
                      month=params['income_month'],
                      tax_amount=params['income_label'])

        db.session.add(user)
        try:
            db.session.commit()
        except Exception as e:
            db.session.rollback()

    return jsonify()

# lists
@calculator_blueprint.route('/sb_list', methods=['GET', 'POST'])
def sb_list_items():
    current_id = current_user.id
    sb_list = SmallBussines.query.filter_by(payer_id = current_id)
    req_pas1 = request.path

    return render_template('sb_list.html', req_pas1=req_pas1, sb_list=sb_list)


@calculator_blueprint.route('/property_land_list', methods=['GET', 'POST'])
def property_land_list():
    current_id = current_user.id
    land_list = Property.query.filter_by(payer_id = current_id)
    req_pas1 = request.path


    return render_template('land_list.html', req_pas1 = req_pas1, land_list=land_list)

@calculator_blueprint.route('/property_property_list', methods=['GET', 'POST'])
def property_property_list():
    current_id = current_user.id
    property_list = property_property_base.query.filter_by(payer_id = current_id)
    req_pas1 = request.path

    return render_template('property_property_list.html', req_pas1=req_pas1, property_list=property_list)

@calculator_blueprint.route('/vat_list', methods=['GET', 'POST'])
def vat_list():
    current_id = current_user.id
    req_pas1 = request.path
    vat_list = vat_tax_base.query.filter_by(payer_id = current_id)

    return render_template('vat_list.html',req_pas1=req_pas1, vat_list=vat_list)

@calculator_blueprint.route('/income_list', methods=['GET', 'POST'])
def income_list():
    current_id = current_user.id
    req_pas1 = request.path

    income_list = income.query.filter_by(payer_id = current_id)
    return render_template('income_list.html', income_list=income_list, req_pas1 = req_pas1 )


#delete

@calculator_blueprint.route('/delete_sb/<id>/', methods=['GET', 'POST'])
def delete_sb(id):
    my_data = SmallBussines.query.get(id)
    db.session.delete(my_data)
    db.session.commit()
    flash("employee delete sucssesfully")

    return redirect(url_for('calculator.sb_list_items'))


@calculator_blueprint.route('/delete_land/<id>/', methods=['GET', 'POST'])
def delete_land(id):
    my_data = Property.query.get(id)
    db.session.delete(my_data)
    db.session.commit()
    flash("employee delete sucssesfully")

    return redirect(url_for('calculator.property_land_list'))


@calculator_blueprint.route('/delete_property/<id>/', methods=['GET', 'POST'])
def delete_property(id):
    my_data = property_property_base.query.get(id)
    db.session.delete(my_data)
    db.session.commit()
    flash("employee delete sucssesfully")

    return redirect(url_for('calculator.property_property_list'))


@calculator_blueprint.route('/delete_vat/<id>/', methods=['GET', 'POST'])
def delete_vat(id):
    my_data = vat_tax_base.query.get(id)
    db.session.delete(my_data)
    db.session.commit()
    flash("employee delete sucssesfully")

    return redirect(url_for('calculator.vat_list'))

@calculator_blueprint.route('/delete_income/<id>/', methods=['GET', 'POST'])
def delete_income(id):
    my_data = income.query.get(id)
    db.session.delete(my_data)
    db.session.commit()
    flash("employee delete sucssesfully")

    return redirect(url_for('calculator.income_list'))





