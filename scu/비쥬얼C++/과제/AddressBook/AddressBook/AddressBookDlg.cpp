
// AddressBookDlg.cpp : ���� ����
//

#include "stdafx.h"
#include "AddressBook.h"
#include "AddressBookDlg.h"
#include "afxdialogex.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#endif

// ���� ���α׷� ������ ���Ǵ� CAboutDlg ��ȭ �����Դϴ�.

class CAboutDlg : public CDialogEx
{
public:
	CAboutDlg();

// ��ȭ ���� �������Դϴ�.
	enum { IDD = IDD_ABOUTBOX };

	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV �����Դϴ�.

// �����Դϴ�.
protected:
	DECLARE_MESSAGE_MAP()
};

CAboutDlg::CAboutDlg() : CDialogEx(CAboutDlg::IDD)
{
}

void CAboutDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialogEx::DoDataExchange(pDX);
}

BEGIN_MESSAGE_MAP(CAboutDlg, CDialogEx)
END_MESSAGE_MAP()


// CAddressBookDlg ��ȭ ����



CAddressBookDlg::CAddressBookDlg(CWnd* pParent /*=NULL*/)
	: CDialogEx(CAddressBookDlg::IDD, pParent)
{
	m_hIcon = AfxGetApp()->LoadIcon(IDR_MAINFRAME);
}

void CAddressBookDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialogEx::DoDataExchange(pDX);
	DDX_Control(pDX, IDS_TOTAL, mStaticTotal);
	DDX_Control(pDX, IDS_NAME, mStaticName);
	DDX_Control(pDX, IDS_AGE, mStaticAge);
	DDX_Control(pDX, IDS_GENDER, mStaticGender);
	DDX_Control(pDX, IDS_PHONE, mStaticPhone);
	DDX_Control(pDX, IDS_ADDRESS, mStaticAddress);
}

BEGIN_MESSAGE_MAP(CAddressBookDlg, CDialogEx)
	ON_WM_SYSCOMMAND()
	ON_WM_PAINT()
	ON_WM_QUERYDRAGICON()
	ON_BN_CLICKED(IDOK, &CAddressBookDlg::OnBnClickedOk)
	ON_BN_CLICKED(IDB_INSERT, &CAddressBookDlg::OnBnClickedInsert)
	ON_BN_CLICKED(IDB_SAVE, &CAddressBookDlg::OnBnClickedSave)
	ON_BN_CLICKED(IDB_LOAD, &CAddressBookDlg::OnBnClickedLoad)
	ON_LBN_DBLCLK(IDL_LIST, &CAddressBookDlg::OnLbnDblclkList)
	ON_BN_CLICKED(IDR_MALE, &CAddressBookDlg::OnBnClickedMale)
	ON_BN_CLICKED(IDR_FEMALE, &CAddressBookDlg::OnBnClickedFemale)
	ON_BN_CLICKED(IDB_SEARCH, &CAddressBookDlg::OnBnClickedSearch)
END_MESSAGE_MAP()


// CAddressBookDlg �޽��� ó����

BOOL CAddressBookDlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	// �ý��� �޴��� "����..." �޴� �׸��� �߰��մϴ�.

	// IDM_ABOUTBOX�� �ý��� ��� ������ �־�� �մϴ�.
	ASSERT((IDM_ABOUTBOX & 0xFFF0) == IDM_ABOUTBOX);
	ASSERT(IDM_ABOUTBOX < 0xF000);

	CMenu* pSysMenu = GetSystemMenu(FALSE);
	if (pSysMenu != NULL)
	{
		BOOL bNameValid;
		CString strAboutMenu;
		bNameValid = strAboutMenu.LoadString(IDS_ABOUTBOX);
		ASSERT(bNameValid);
		if (!strAboutMenu.IsEmpty())
		{
			pSysMenu->AppendMenu(MF_SEPARATOR);
			pSysMenu->AppendMenu(MF_STRING, IDM_ABOUTBOX, strAboutMenu);
		}
	}

	// �� ��ȭ ������ �������� �����մϴ�.  ���� ���α׷��� �� â�� ��ȭ ���ڰ� �ƴ� ��쿡��
	//  �����ӿ�ũ�� �� �۾��� �ڵ����� �����մϴ�.
	SetIcon(m_hIcon, TRUE);			// ū �������� �����մϴ�.
	SetIcon(m_hIcon, FALSE);		// ���� �������� �����մϴ�.

	// TODO: ���⿡ �߰� �ʱ�ȭ �۾��� �߰��մϴ�.

	return TRUE;  // ��Ŀ���� ��Ʈ�ѿ� �������� ������ TRUE�� ��ȯ�մϴ�.
}

void CAddressBookDlg::OnSysCommand(UINT nID, LPARAM lParam)
{
	if ((nID & 0xFFF0) == IDM_ABOUTBOX)
	{
		CAboutDlg dlgAbout;
		dlgAbout.DoModal();
	}
	else
	{
		CDialogEx::OnSysCommand(nID, lParam);
	}
}

// ��ȭ ���ڿ� �ּ�ȭ ���߸� �߰��� ��� �������� �׸�����
//  �Ʒ� �ڵ尡 �ʿ��մϴ�.  ����/�� ���� ����ϴ� MFC ���� ���α׷��� ��쿡��
//  �����ӿ�ũ���� �� �۾��� �ڵ����� �����մϴ�.

void CAddressBookDlg::OnPaint()
{
	if (IsIconic())
	{
		CPaintDC dc(this); // �׸��⸦ ���� ����̽� ���ؽ�Ʈ�Դϴ�.

		SendMessage(WM_ICONERASEBKGND, reinterpret_cast<WPARAM>(dc.GetSafeHdc()), 0);

		// Ŭ���̾�Ʈ �簢������ �������� ����� ����ϴ�.
		int cxIcon = GetSystemMetrics(SM_CXICON);
		int cyIcon = GetSystemMetrics(SM_CYICON);
		CRect rect;
		GetClientRect(&rect);
		int x = (rect.Width() - cxIcon + 1) / 2;
		int y = (rect.Height() - cyIcon + 1) / 2;

		// �������� �׸��ϴ�.
		dc.DrawIcon(x, y, m_hIcon);
	}
	else
	{
		CDialogEx::OnPaint();
	}
}

// ����ڰ� �ּ�ȭ�� â�� ���� ���ȿ� Ŀ���� ǥ�õǵ��� �ý��ۿ���
//  �� �Լ��� ȣ���մϴ�.
HCURSOR CAddressBookDlg::OnQueryDragIcon()
{
	return static_cast<HCURSOR>(m_hIcon);
}



void CAddressBookDlg::OnBnClickedOk()
{
	// TODO: Add your control notification handler code here
	CWnd *p = GetFocus();
	if (GetDlgItem(IDOK) == p)
	{
		CDialogEx::OnOK();
		return;
	}
}

// �ּҷ� ����
void CAddressBookDlg::OnBnClickedInsert()
{
	// TODO: Add your control notification handler code here
	CString name, age, phone, address;

	// ����Ʈ�ڽ� ������ ������
	GetDlgItemText(IDE_NAME, name);
	GetDlgItemText(IDE_AGE, age);
	GetDlgItemText(IDE_PHONE, phone);
	GetDlgItemText(IDE_ADDRESS, address);

	// ����ó��
	if (name.IsEmpty())		{ MessageBox(_T("�̸��� �Է��ϼ���")); return; }
	if (age.IsEmpty())		{ MessageBox(_T("���̸� �Է��ϼ���")); return; }
	if (phone.IsEmpty())	{ MessageBox(_T("��ȭ�� �Է��ϼ���")); return; }
	if (address.IsEmpty())	{ MessageBox(_T("�ּҸ� �Է��ϼ���")); return; }
	
	// Ŭ���� ����
	Person p;
	p.set_name(name);
	p.set_age(age);
	p.set_phone(phone);
	p.set_address(address);
	p.set_gender(mGender);

	// ����Ʈ�� ����
	mPeople.push_back(p);
	mPeople.sort();			// �̸� �� ����
	mGender = L"UNKNOWN";

	// ��� ����
	updateAddressList();
}

// ȭ�� ���� �Լ�
void CAddressBookDlg::updateAddressList()
{
	CListBox *p = (CListBox *)GetDlgItem(IDL_LIST);
	p->ResetContent();		// ��� �� ����Ʈ�ڽ� �ʱ�ȭ

	// ��� ���
	for (list<Person>::iterator iter = mPeople.begin(); iter != mPeople.end(); ++iter)
	{
		p->AddString(iter->get_name());
	}

	// �ּҷ� ���� ǥ��
	CString t;
	t.Format(_T("%d ��"), mPeople.size());
	mStaticTotal.SetWindowTextW(t);

	Invalidate(false);
}

// �ּҷ� ������ ���Ϸ� ����
void CAddressBookDlg::OnBnClickedSave()
{
	// TODO: Add your control notification handler code here
	CFile file;
	CString path = _T("File.dat");

	// ���� ó��
	if (!file.Open(path, CFile::modeCreate | CFile::modeWrite))
	{
		return;
	}
	if (mPeople.empty())
	{
		return;
	}

	// �ּҷ� ����Ʈ�� ���Ϸ� ����
	CArchive ar(&file, CArchive::store);
	ar << (DWORD)mPeople.size();
	for (list<Person>::iterator iter = mPeople.begin(); iter != mPeople.end(); ++iter)
	{	
		try {
			iter->Serialize(ar);
		}
		catch (CFileException *fe)		{ fe->ReportError(); }
		catch (CArchiveException *ae)	{ ae->ReportError(); }
		catch (CMemoryException *me)	{ me->ReportError(); }
	}
	ar.Close();
	file.Close();
	MessageBox(_T("���� �Ϸ�"));
}

// ����� �ּҷ� �ε�
void CAddressBookDlg::OnBnClickedLoad()
{
	// TODO: Add your control notification handler code here
	CFile file;
	CString path = _T("File.dat");

	// ���� ó��
	if (!file.Open(path, CFile::modeRead))
	{
		return;
	}
	if (!mPeople.empty())
	{
		if (IDYES == AfxMessageBox(L"����� ����� �ҷ����� ���� �ּҷ��� �����˴ϴ�.", MB_YESNO))
		{
			mPeople.clear();
		}
		else
		{
			return;
		}
	}

	// ���� �ε�
	CArchive ar(&file, CArchive::load);
	DWORD count;
	ar >> count;						// ��ü �ּҷ� ��
	for (int i = 0; i < count; i++)		// �ݺ������� �ε�
	{
		Person p;
		p.Serialize(ar);
		mPeople.push_back(p);
	}
	ar.Close();
	file.Close();	
	updateAddressList();				// ����
}

// ��� Ŭ�� �� ������ ǥ��
void CAddressBookDlg::OnLbnDblclkList()
{
	// TODO: Add your control notification handler code here
	CListBox *p = (CListBox *)GetDlgItem(IDL_LIST);

	int idx = p->GetCurSel();

	auto iter = mPeople.begin();
	advance(iter, idx);

	mStaticName.SetWindowTextW(iter->get_name());
	mStaticAge.SetWindowTextW(iter->get_age());
	mStaticPhone.SetWindowTextW(iter->get_phone());
	mStaticGender.SetWindowTextW(iter->get_gender());
	mStaticAddress.SetWindowTextW(iter->get_address());

	Invalidate(false);
}

// ���� ���� ó��
void CAddressBookDlg::OnBnClickedMale()
{
	// TODO: Add your control notification handler code here
	mGender = L"����";
}

// ���� ���� ó��
void CAddressBookDlg::OnBnClickedFemale()
{
	// TODO: Add your control notification handler code here
	mGender = L"����";
}

// �̸� �˻�
void CAddressBookDlg::OnBnClickedSearch()
{
	// TODO: Add your control notification handler code here
	CString q;
	GetDlgItemText(IDE_SEARCH, q);

	// ����ó��
	if (q.IsEmpty())
	{
		return;
	}

	// ����Ʈ���� �ش� �̸��� �˻��Ͽ� ǥ��
	for (list<Person>::iterator iter = mPeople.begin(); iter != mPeople.end(); ++iter)
	{
		if (iter->get_name() == q)
		{
			mStaticName.SetWindowTextW(iter->get_name());
			mStaticAge.SetWindowTextW(iter->get_age());
			mStaticPhone.SetWindowTextW(iter->get_phone());
			mStaticGender.SetWindowTextW(iter->get_gender());
			mStaticAddress.SetWindowTextW(iter->get_address());

			Invalidate(false);
			return;
		}
	}
	MessageBox(_T("�ּҷϿ� �������� �ʽ��ϴ�."));
}
