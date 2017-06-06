
// AddressBookDlg.h : ��� ����
//

#pragma once

#include <functional>
#include <algorithm>
#include <list>
#include "Person.h"
#include "afxwin.h"

using namespace std;

// CAddressBookDlg ��ȭ ����
class CAddressBookDlg : public CDialogEx
{
// �����Դϴ�.
public:
	CAddressBookDlg(CWnd* pParent = NULL);	// ǥ�� �������Դϴ�.

// ��ȭ ���� �������Դϴ�.
	enum { IDD = IDD_ADDRESSBOOK_DIALOG };

	protected:
	virtual void DoDataExchange(CDataExchange* pDX);	// DDX/DDV �����Դϴ�.

	void updateAddressList();

// �����Դϴ�.
protected:
	HICON m_hIcon;

	// ������ �޽��� �� �Լ�
	virtual BOOL OnInitDialog();
	afx_msg void OnSysCommand(UINT nID, LPARAM lParam);
	afx_msg void OnPaint();
	afx_msg HCURSOR OnQueryDragIcon();
	DECLARE_MESSAGE_MAP()
public:
	afx_msg void OnBnClickedOk();
	afx_msg void OnBnClickedInsert();
	afx_msg void OnBnClickedSave();
	afx_msg void OnBnClickedLoad();
	afx_msg void OnLbnDblclkList();
	afx_msg void OnBnClickedMale();
	afx_msg void OnBnClickedFemale();
	
	list<Person> mPeople;
	CString mGender = L"UNKNOWN";
	CStatic mStaticTotal;
	CStatic mStaticName;
	CStatic mStaticAge;
	CStatic mStaticGender;
	CStatic mStaticPhone;
	CStatic mStaticAddress;
	afx_msg void OnBnClickedSearch();
};
