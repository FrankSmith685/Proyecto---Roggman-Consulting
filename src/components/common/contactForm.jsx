import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Select, Row, Col } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Option } = Select;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    province: '',
    interest: '',
    referral: '',
    privacy: false,
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      privacy: e.target.checked,
    });
  };

  const handleSubmit = () => {
    console.log('Form values:', formData);
    // Aquí puedes agregar la lógica para manejar el envío del formulario
  };

  const onFinish = () => {
    handleSubmit();
  };

  return (
    <div className="flex justify-center items-center h-auto py-16 px-10 bg-gray-100 w-full" id="contact-form">
      <div className="bg-transparent mx-auto w-11/12">
        <h2 className="text-lg font-bold text-start mb-4 text-gray-600">Kontaktieren Sie uns</h2>
        <p className="text-sm text-start mb-4 text-gray-800">
          Wir sind Experten für Beratung und Change-Management, Auswahl und Headhunting sowie HR Business Partner Services. Wir glauben, dass jedes Unternehmen seine Chance auf Wachstum verdient. Dürfen wir Ihnen helfen?
        </p>
        <Form
          name="contact-form"
          onFinish={onFinish}
          layout="vertical"
        >
          <Row gutter={16}>
            <Col xs={24} sm={8}>
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Bitte geben Sie Ihren Namen ein' }]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item
                name="lastName"
                rules={[{ required: true, message: 'Bitte geben Sie Ihren Nachnamen ein' }]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Nachname"
                  value={formData.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Bitte geben Sie Ihre E-Mail-Adresse ein' }]}
              >
                <Input
                  prefix={<MailOutlined />}
                  placeholder="E-Mail"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={8}>
              <Form.Item
                name="company"
                rules={[{ required: true, message: 'Bitte geben Sie den Namen Ihres Unternehmens ein' }]}
              >
                <Input
                  prefix={<EnvironmentOutlined />}
                  placeholder="Unternehmen"
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item
                name="phone"
                rules={[{ required: true, message: 'Bitte geben Sie Ihre Telefonnummer ein' }]}
              >
                <Input
                  prefix={<PhoneOutlined />}
                  placeholder="Telefonnummer"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item
                name="province"
                rules={[{ required: true, message: 'Bitte geben Sie Ihre Provinz ein' }]}
              >
                <Input
                  prefix={<EnvironmentOutlined />}
                  placeholder="Provinz"
                  value={formData.province}
                  onChange={(e) => handleChange('province', e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="interest"
                rules={[{ required: true, message: 'Bitte wählen Sie Ihr Interesse aus' }]}
              >
                <Select
                  placeholder="Woran sind Sie interessiert?"
                  value={formData.interest}
                  onChange={(value) => handleChange('interest', value)}
                >
                  <Option value="Beratung und Change-Management">Beratung und Change-Management</Option>
                  <Option value="Auswahl und Headhunting">Auswahl und Headhunting</Option>
                  <Option value="HR Business Partner">HR Business Partner</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="referral"
                rules={[{ required: true, message: 'Bitte geben Sie an, wie Sie uns gefunden haben' }]}
              >
                <Input
                  placeholder="Wie haben Sie von uns erfahren?"
                  value={formData.referral}
                  onChange={(e) => handleChange('referral', e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Form.Item name="privacy" valuePropName="checked" noStyle>
              <Checkbox
                checked={formData.privacy}
                onChange={handleCheckboxChange}
              >
                Ich akzeptiere die Datenschutzrichtlinie
              </Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className='md:w-1/12 w-1/3 sm:w-1/6 mx-auto'>
              Senden
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
