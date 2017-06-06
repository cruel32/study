#pragma once
#include "afx.h"

// �������� Ŭ����
class Person : public CObject
{
	CString name;		// �̸�
	CString phone;		// ��ȭ��ȣ
	CString address;	// �ּ�
	CString gender;		// ����
	CString age;		// ����

protected:
	DECLARE_SERIAL(Person);

public:
	// ����ȭ�� ���� ������
	Person(const Person& p) 
	{
		name = p.get_name();
		phone = p.get_phone();
		address = p.get_address();
		gender = p.get_gender();
		age = p.get_age();
	};
	Person();
	~Person();

	// Set
	void set_name(CString n) { name = n; }
	void set_phone(CString p) { phone = p; }
	void set_address(CString a) { address = a; }
	void set_gender(CString g) { gender = g; }
	void set_age(CString a) { age = a; }
	// Get
	CString get_name() const { return name; }
	CString get_phone() const { return phone; }
	CString get_address() const { return address; }
	CString get_gender() const { return gender; }
	CString get_age() const { return age; }
	// ������ ���� ������ �����ε�
	bool operator < (const Person &p) const {
		
		return this->get_name() < p.get_name();
	}
	// ���� ������� ���� ����ȭ �����ε�
	virtual void Serialize(CArchive &ar);
};