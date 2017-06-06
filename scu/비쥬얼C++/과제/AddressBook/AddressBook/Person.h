#pragma once
#include "afx.h"

// 개인정보 클래스
class Person : public CObject
{
	CString name;		// 이름
	CString phone;		// 전화번호
	CString address;	// 주소
	CString gender;		// 성별
	CString age;		// 나이

protected:
	DECLARE_SERIAL(Person);

public:
	// 직렬화를 위한 재정의
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
	// 정렬을 위한 연산자 오버로딩
	bool operator < (const Person &p) const {
		
		return this->get_name() < p.get_name();
	}
	// 파일 입출력을 위한 직렬화 오버로딩
	virtual void Serialize(CArchive &ar);
};