# E-Procurement System - Requirements Document
## Prototype Development Plan

**Project**: Town Council E-Procurement System
**Document Version**: 1.0
**Date**: 2026-01-30

---

## 1. EXECUTIVE SUMMARY

### 1.1 Project Overview
Design, develop, and implement a robust e-Procurement system for a Town Council managing 60,000+ dwelling units, shops, and hawker stalls. The system must ensure efficiency, transparency, and compliance with MND (Ministry of National Development) guidelines and Town Council Financial Rules.

### 1.2 Prototype Objectives
- Demonstrate core RFQ management workflows
- Validate security and encryption mechanisms
- Showcase user interface for both Town Council staff and suppliers
- Prove compliance with MND e-procurement guidelines
- Establish technical feasibility for full implementation

---

## 2. STAKEHOLDERS

### 2.1 Primary Users
- **Town Council Staff**: Procurement officers, approving authorities, administrators
- **Suppliers/Vendors**: External parties submitting quotations
- **Witnessing Officers**: Authorized personnel for quotation opening
- **Auditors**: Internal/external audit teams

### 2.2 System Administrators
- IT support team
- Security officers
- Data protection officers

---

## 3. FUNCTIONAL REQUIREMENTS

### 3.1 User Management & Authentication

#### 3.1.1 Town Council Staff Portal
**Priority**: Critical
**Requirements**:
- Role-based access control (RBAC)
  - Admin
  - Procurement Officer
  - Approving Authority
  - Witnessing Officer
  - Auditor (read-only)
- Multi-factor authentication (MFA)
- Password policy enforcement (complexity, expiry)
- Session timeout management
- Single Sign-On (SSO) capability

#### 3.1.2 Supplier Portal
**Priority**: Critical
**Requirements**:
- Self-service registration workflow
- Automated approval process with configurable rules
- Email verification
- Company profile management
- Document upload capability (business registration, certifications)
- Performance history tracking
- Compliance status dashboard

### 3.2 Request for Quotation (RFQ) Management Module

#### 3.2.1 RFQ Creation
**Priority**: Critical
**Requirements**:
- Template-based RFQ creation
- Rich text editor for specifications
- Attachment support (drawings, BOQ, technical specs)
- Item/service categorization
- Budget allocation tracking
- Approval workflow before publication
- Scheduling (open date, close date, evaluation date)
- Multi-currency support (SGD primary)
- GST calculation toggle

#### 3.2.2 RFQ Publishing & Distribution
**Priority**: Critical
**Requirements**:
- Automated email notifications to registered suppliers
- Supplier category-based targeting
- RFQ portal listing (public/private)
- Addendum/clarification management
- Automatic deadline reminders
- Download tracking

#### 3.2.3 Quotation Submission (Supplier Side)
**Priority**: Critical
**Requirements**:
- Secure submission portal
- Auto-save draft functionality
- File attachment support
- Submission timestamp recording (immutable)
- Submission confirmation receipt
- Encrypted storage until RFQ close
- Prevention of post-submission amendments
- Alternative quotation submission capability

**MND Compliance**:
- End-to-end encryption of quotation data
- Digital signature/certification
- Tamper-proof submission mechanism
- Audit trail of all submission activities

#### 3.2.4 Quotation Opening Process
**Priority**: Critical
**Requirements**:
- Automated opening at RFQ close time
- Authorized officer verification (2-factor)
- Witnessing officer assignment (must not be involved in quotation)
- Real-time decryption
- Immutable audit log of opening event
- Recording of:
  - Vendor name and address
  - Items quoted
  - Date and time of receipt
  - Date and time of opening
  - Officers present

**MND Compliance**:
- No manual amendments allowed
- All quotations encrypted until close
- Quotation integrity verification

#### 3.2.5 Quotation Evaluation
**Priority**: High
**Requirements**:
- Side-by-side comparison view
- Scoring matrix (price, technical, delivery, etc.)
- Weighted evaluation criteria
- Comments and notes capability
- Recommendation workflow
- Approval chain management
- Rejection reason capture

#### 3.2.6 Award/Rejection Communication
**Priority**: High
**Requirements**:
- Automated notification to all bidders
- Award letter generation
- Rejection notification with reasons (TCFR Rule 78(9) compliance)
- Email and portal notification
- Acknowledgment tracking

### 3.3 Supplier Management

#### 3.3.1 Supplier Registration
**Priority**: High
**Requirements**:
- Online registration form
- Document verification workflow
- Categorization by trade/service type
- Approval/rejection process
- Registration status notifications
- Renewal management
- Annual registration fee tracking (if applicable)

#### 3.3.2 Supplier Performance Tracking
**Priority**: Medium
**Requirements**:
- Performance rating system
- Delivery tracking
- Quality assessment
- Compliance record
- Blacklist management
- Warning/demerit system
- Historical transaction view

#### 3.3.3 Supplier Database
**Priority**: High
**Requirements**:
- Searchable supplier directory
- Filter by category, rating, compliance status
- Export functionality
- Bulk upload capability
- Deduplication checks
- Contact management

### 3.4 Compliance & Security

#### 3.4.1 Data Protection (PDPA Compliance)
**Priority**: Critical
**Requirements**:
- Consent management
- Data retention policy enforcement
- Secure data disposal mechanism
- Personal data access controls
- Data breach notification workflow
- Privacy policy display
- User data export/deletion requests

#### 3.4.2 Security Measures (ISO 27001 Alignment)
**Priority**: Critical
**Requirements**:
- SSL/TLS encryption (minimum TLS 1.2)
- Data encryption at rest (AES-256)
- Data encryption in transit
- Database encryption
- Secure key management
- Regular security patching
- Penetration testing capability
- Vulnerability assessment
- DDoS protection
- Firewall configuration
- Intrusion detection system (IDS)

#### 3.4.3 Access Control
**Priority**: Critical
**Requirements**:
- Principle of least privilege
- Segregation of duties
- Access approval workflow
- Periodic access review
- Automatic deprovisioning
- IP whitelisting (optional)
- Geo-blocking capability

#### 3.4.4 Audit Logging
**Priority**: Critical
**Requirements**:
- Comprehensive activity logging:
  - User login/logout
  - RFQ creation/modification
  - Quotation submission/opening
  - Approval actions
  - Data exports
  - Configuration changes
  - Failed access attempts
- Immutable log storage
- Log retention (minimum 7 years)
- Log export functionality (PDF, CSV, Excel)
- Log search and filter
- Periodic audit log reports to Town Council
- Real-time alerting for suspicious activities

### 3.5 Reporting & Analytics

#### 3.5.1 Standard Reports
**Priority**: Medium
**Requirements**:
- RFQ summary report
- Quotation comparison report
- Supplier performance report
- Procurement spend analysis
- Compliance report
- Audit trail report
- User activity report
- System usage statistics

#### 3.5.2 Dashboard
**Priority**: Medium
**Requirements**:
- Executive summary dashboard
- KPI tracking (average RFQ cycle time, supplier participation rate, etc.)
- Real-time RFQ status
- Pending approvals overview
- Alerts and notifications panel
- Customizable widgets

### 3.6 Document Management

**Priority**: High
**Requirements**:
- Centralized document repository
- Version control
- Document categorization
- Search functionality
- Access permissions
- Document approval workflow
- Digital signature support
- PDF generation
- Document templates (RFQ, PO, contracts)

### 3.7 Notification System

**Priority**: High
**Requirements**:
- Email notifications
- In-app notifications
- SMS alerts (optional)
- Configurable notification preferences
- Notification templates
- Delivery tracking
- Escalation rules

### 3.8 Integration Requirements

**Priority**: Low (for prototype)
**Future Consideration**:
- Finance system integration (PO, GRN, Invoice)
- HR system integration (employee verification)
- Payment gateway integration
- Email server integration
- Single Sign-On (SSO) with corporate directory

---

## 4. NON-FUNCTIONAL REQUIREMENTS

### 4.1 Performance

**Requirements**:
- Page load time: < 3 seconds
- Quotation submission: < 5 seconds
- Support minimum 100 concurrent users
- Database query response: < 1 second
- Report generation: < 10 seconds (standard reports)
- File upload: Support up to 50MB files
- System response time: < 2 seconds for 95% of transactions

### 4.2 Availability & Reliability

**Requirements**:
- System availability: ≥ 99.9% during support hours
- Planned downtime: Maximum 4 hours/month (outside business hours)
- Maximum unplanned downtime: 1 hour/month
- Disaster recovery capability
- Backup frequency: Daily (incremental), Weekly (full)
- Backup retention: 90 days
- Recovery Time Objective (RTO): < 4 hours
- Recovery Point Objective (RPO): < 24 hours

### 4.3 Scalability

**Requirements**:
- Support 500+ registered suppliers
- Handle 100+ concurrent RFQs
- Store 5+ years of historical data
- Horizontal scaling capability
- Database partitioning support

### 4.4 Usability

**Requirements**:
- Intuitive user interface
- Responsive design (desktop, tablet, mobile)
- Browser compatibility:
  - Chrome (latest 2 versions)
  - Firefox (latest 2 versions)
  - Safari (latest 2 versions)
  - Edge (latest 2 versions)
- WCAG 2.1 Level AA accessibility compliance
- Multi-language support (English primary, Chinese/Malay optional)
- Consistent navigation
- Help documentation and tooltips
- User training materials

### 4.5 Maintainability

**Requirements**:
- Modular architecture
- Clean code standards
- Comprehensive documentation
- Automated testing (unit, integration)
- Version control (Git)
- CI/CD pipeline capability
- Configuration management
- Error logging and monitoring

### 4.6 Data Integrity

**Requirements**:
- Database transaction management (ACID compliance)
- Data validation at input
- Referential integrity constraints
- Checksums for file uploads
- Digital signatures for critical transactions
- Audit trail for all data changes

---

## 5. TECHNICAL REQUIREMENTS

### 5.1 Recommended Technology Stack

#### 5.1.1 Frontend
- **Framework**: React.js or Vue.js
- **UI Library**: Material-UI, Ant Design, or Bootstrap
- **State Management**: Redux or Vuex
- **HTTP Client**: Axios
- **Build Tool**: Webpack or Vite
- **Form Validation**: Yup or Joi

#### 5.1.2 Backend
- **Framework**: Node.js (Express.js) or Python (Django/FastAPI) or Java (Spring Boot)
- **API Architecture**: RESTful API or GraphQL
- **Authentication**: JWT (JSON Web Tokens) + OAuth 2.0
- **Encryption**: bcrypt (passwords), AES-256 (data)
- **File Storage**: AWS S3 or Azure Blob Storage (encrypted)

#### 5.1.3 Database
- **Primary Database**: PostgreSQL or MySQL (relational)
- **Cache**: Redis
- **Search Engine**: Elasticsearch (optional for advanced search)
- **Backup**: Automated scheduled backups

#### 5.1.4 Infrastructure
- **Hosting**: Cloud-based (AWS, Azure, or Google Cloud)
- **Web Server**: Nginx or Apache
- **SSL Certificate**: Let's Encrypt or commercial
- **Monitoring**: Datadog, New Relic, or Prometheus + Grafana
- **Log Management**: ELK Stack (Elasticsearch, Logstash, Kibana)

#### 5.1.5 Development Tools
- **Version Control**: Git (GitHub, GitLab, or Bitbucket)
- **CI/CD**: Jenkins, GitHub Actions, or GitLab CI
- **Testing**: Jest, Mocha, PyTest, JUnit
- **API Testing**: Postman, Swagger/OpenAPI
- **Code Quality**: SonarQube, ESLint
- **Documentation**: Swagger/OpenAPI, JSDoc

### 5.2 Data Exchange Standards

**Requirements**:
- RESTful API with JSON format
- Standard HTTP methods (GET, POST, PUT, DELETE)
- API versioning
- Rate limiting
- API documentation (Swagger/OpenAPI)
- Webhook support for real-time notifications

### 5.3 Encryption Requirements

**MND Compliance**:
- **In Transit**: TLS 1.2 or higher
- **At Rest**: AES-256 encryption
- **Quotation Encryption**: Public-key cryptography (RSA 2048-bit minimum)
- **Key Management**: AWS KMS or Azure Key Vault
- **Digital Signatures**: For quotation submission integrity

---

## 6. REGULATORY COMPLIANCE

### 6.1 MND E-Procurement Guidelines

**Mandatory Requirements**:
1. **Authentication and Encryption**:
   - Implement robust authentication mechanisms
   - End-to-end encryption of all procurement data
   - Secure data exchange standards

2. **Quotation Integrity**:
   - Establish immutable timestamp at receipt
   - Prevent unauthorized access before opening
   - Prevent tampering or amendment
   - Maintain integrity verification mechanisms

3. **Quotation Opening**:
   - Only authorized officers approved by Secretary
   - Witnessing officers must not be involved in quotation
   - No amendments allowed to quotations
   - All quotations encrypted until close

4. **Record Keeping**:
   - Record for every quotation: name, address, items quoted, date/time of receipt
   - No traditional quotation boxes for e-procurement
   - Comprehensive audit trail

5. **TCFR Rule 78(9) Compliance**:
   - Communicate award/rejection outcome to all vendors/contractors
   - Maintain proper documentation

### 6.2 ISO 27001 Alignment

**Requirements**:
- Information security management system (ISMS)
- Risk assessment and treatment
- Security policies and procedures
- Incident management
- Business continuity planning
- Regular security audits

### 6.3 PDPA Compliance

**Requirements**:
- Consent mechanisms
- Purpose limitation
- Data accuracy
- Protection measures
- Retention limitation
- Transfer limitation
- Access and correction rights
- Data breach notification

---

## 7. USER TRAINING & DOCUMENTATION

### 7.1 Training Requirements

**Priority**: High
**Deliverables**:
- User training program for Town Council staff:
  - System administrators (8 hours)
  - Procurement officers (4 hours)
  - Approving authorities (2 hours)
  - Witnessing officers (2 hours)
- Supplier training program:
  - Registration and portal navigation (1 hour)
  - Quotation submission process (1 hour)
  - Video tutorials

### 7.2 Documentation Requirements

**Priority**: High
**Deliverables**:
- System documentation:
  - Architecture design document
  - Database schema documentation
  - API documentation
  - Security and encryption documentation
- User manuals:
  - Staff user manual
  - Supplier user manual
  - Administrator manual
- Quick reference guides
- FAQs
- Video tutorials
- Troubleshooting guide

---

## 8. SUPPORT & MAINTENANCE

### 8.1 Service Level Agreement (SLA)

**Requirements**:
- **System Availability**: ≥ 99.9% during support hours
- **Support Hours**: Define business hours (e.g., Monday-Friday 9:00 AM - 6:00 PM SGT)
- **Response Targets**:
  - Critical (system down): 1 hour
  - High (major function impaired): 4 hours
  - Medium (minor issue): 8 hours
  - Low (inquiry/enhancement): 24 hours
- **Resolution Targets**:
  - Critical: 4 hours
  - High: 24 hours
  - Medium: 3 business days
  - Low: 5 business days
- **Penalties**: Define penalty structure for SLA breaches

### 8.2 Post-Launch Support

**Requirements**:
- Dedicated support team
- Help desk ticketing system
- Email support
- Phone support (critical issues)
- Regular system health checks
- Monthly maintenance windows
- Quarterly system reviews

### 8.3 System Updates

**Requirements**:
- Security patches: As needed (within 48 hours of release)
- Bug fixes: Monthly release cycle
- Feature enhancements: Quarterly release cycle
- Version upgrade notifications
- Rollback capability
- Testing environment for updates

---

## 9. CONTRACT & COMMERCIAL TERMS

### 9.1 Contract Period
- Duration: 3, 4, or 5 years (Town Council to determine based on price competitiveness)
- Quotation validity: 60 days from RFQ closing

### 9.2 Payment Terms
- Payment within 30 days after invoice receipt
- Payment upon completion of purchase order
- Work completion to satisfaction of Superintending Officer

### 9.3 Pricing Structure

**Components**:
1. **Setup Cost (One-time)**:
   - Professional services
   - System configuration
   - Project management
   - Testing
   - Training
   - Number of user accounts included

2. **Annual Subscription**:
   - User/software subscription
   - Maintenance and support
   - Additional user costs (if exceeding base allocation)

3. **Optional Fees**:
   - New bidder registration annual fee (payable by bidders)

4. **Alternative Offers**: Allowed with full technical details

### 9.4 Termination Clauses
- Town Council right to terminate for unsatisfactory performance
- Contractor penalty: Difference + 20% of new/old contract value (whichever higher)
- 30 days' notice for termination with cause

---

## 10. PROTOTYPE SCOPE & DELIVERABLES

### 10.1 Prototype Features (MVP)

**Phase 1: Core Functionality**
1. User authentication and authorization (staff + supplier)
2. Basic RFQ creation and publishing
3. Supplier quotation submission with encryption
4. Quotation opening with authorization workflow
5. Basic evaluation and comparison
6. Award/rejection notification
7. Audit logging
8. Basic reporting

**Out of Scope for Prototype**:
- Advanced analytics and dashboards
- Integration with external systems
- Mobile apps
- Multi-language support
- Advanced supplier performance tracking
- Payment processing

### 10.2 Prototype Deliverables

1. **Working Software**:
   - Deployed application (staging environment)
   - Source code repository
   - Database scripts

2. **Documentation**:
   - Architecture design document
   - API documentation
   - User guide (preliminary)
   - Administrator guide
   - Test plan and test results

3. **Demo Materials**:
   - Demo script
   - Sample data
   - User personas and scenarios
   - Presentation deck

4. **Project Artifacts**:
   - Test plan and UAT results
   - Go-live criteria
   - Risk assessment
   - Security compliance checklist

### 10.3 Acceptance Criteria

**UAT Success Criteria**:
- All critical use cases successfully tested
- Security requirements validated
- MND compliance requirements met
- Performance benchmarks achieved
- User acceptance sign-off

**Go-Live Criteria**:
- UAT passed
- Production environment ready
- Data migration completed (if applicable)
- User training completed
- Documentation delivered
- Support team trained
- Rollback plan in place

---

## 11. IMPLEMENTATION PHASES

### Phase 1: Requirements & Design (Weeks 1-4)
- Stakeholder workshops
- Requirements finalization
- UI/UX design
- Architecture design
- Database design
- Security design
- Review and approval

### Phase 2: Development (Weeks 5-12)
- Sprint 1: User management & authentication
- Sprint 2: RFQ creation and management
- Sprint 3: Quotation submission and encryption
- Sprint 4: Quotation opening and evaluation
- Sprint 5: Notifications and reporting
- Sprint 6: Audit logging and security hardening

### Phase 3: Testing (Weeks 13-16)
- Unit testing (ongoing)
- Integration testing
- Security testing
- Performance testing
- User acceptance testing (UAT)
- Bug fixing

### Phase 4: Training & Documentation (Weeks 15-17)
- Documentation completion
- Training material development
- Staff training sessions
- Supplier training sessions

### Phase 5: Deployment & Go-Live (Week 18-20)
- Production environment setup
- Data migration (if applicable)
- Pilot run
- Go-live
- Post-launch support

---

## 12. RISKS & MITIGATION

### 12.1 Technical Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Integration complexity with existing systems | High | Medium | Design API-first architecture; use standard protocols |
| Data security breach | Critical | Low | Implement defense-in-depth; regular security audits |
| Performance issues under load | High | Medium | Load testing; scalable cloud infrastructure |
| Browser compatibility issues | Medium | Medium | Cross-browser testing; progressive enhancement |
| Encryption key management | High | Low | Use cloud KMS; documented key rotation procedures |

### 12.2 Operational Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| User adoption resistance | High | Medium | Comprehensive training; change management |
| Insufficient user training | High | Medium | Structured training program; documentation |
| Lack of supplier participation | High | Low | Easy registration; user-friendly portal |
| Data migration errors | High | Low | Thorough testing; phased migration |

### 12.3 Compliance Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| MND guideline non-compliance | Critical | Low | Compliance checklist; regular audits |
| PDPA violations | Critical | Low | Privacy by design; DPO involvement |
| ISO 27001 gaps | High | Low | ISMS implementation; external audit |

---

## 13. SUCCESS METRICS

### 13.1 Business Metrics
- RFQ cycle time reduction: Target 30% improvement
- Supplier participation increase: Target 20% increase
- Procurement cost savings: Target 10% reduction
- Process transparency score: Target 90%+ stakeholder satisfaction

### 13.2 Technical Metrics
- System availability: ≥ 99.9%
- Average page load time: < 3 seconds
- Zero critical security incidents
- User satisfaction score: ≥ 4.0/5.0

### 13.3 Compliance Metrics
- MND compliance: 100%
- PDPA compliance: 100%
- Audit findings: Zero critical findings

---

## 14. ASSUMPTIONS

1. Town Council has existing IT infrastructure (servers, network)
2. Town Council staff have basic computer literacy
3. Suppliers have internet access and email
4. Town Council provides timely feedback during development
5. Subject matter experts available for requirements clarification
6. Test data and scenarios provided by Town Council
7. No integration with external systems required for prototype
8. Single deployment location (Singapore)

---

## 15. CONSTRAINTS

1. **Budget**: To be defined based on quotation
2. **Timeline**: Prototype development within 18-20 weeks
3. **Regulatory**: Must comply with MND guidelines, PDPA, ISO 27001
4. **Technology**: Must use generally available IT systems and software
5. **Language**: Primary language English
6. **Currency**: Singapore Dollars (SGD)

---

## 16. DEPENDENCIES

1. Town Council stakeholder availability
2. Access to reference procurement documents
3. Approval workflows and authorization matrix
4. Existing supplier database (if any)
5. IT infrastructure readiness
6. Security and compliance team involvement

---

## 17. GLOSSARY

- **RFQ**: Request for Quotation
- **MND**: Ministry of National Development
- **PDPA**: Personal Data Protection Act
- **TCFR**: Town Councils Financial Rules
- **UAT**: User Acceptance Testing
- **SLA**: Service Level Agreement
- **MFA**: Multi-Factor Authentication
- **RBAC**: Role-Based Access Control
- **KPI**: Key Performance Indicator
- **GST**: Goods and Services Tax

---

## 18. APPENDICES

### Appendix A: User Stories

**As a Procurement Officer**:
- I want to create an RFQ easily so that I can initiate procurement quickly
- I want to compare quotations side-by-side so that I can make informed decisions
- I want to track RFQ status so that I know what requires my attention

**As a Supplier**:
- I want to register easily so that I can participate in quotations
- I want to submit quotations securely so that my pricing remains confidential
- I want to receive notifications so that I don't miss opportunities

**As an Auditor**:
- I want to review audit logs so that I can verify compliance
- I want to generate reports so that I can analyze procurement activities

### Appendix B: Wireframes & Mockups
(To be developed during design phase)

### Appendix C: Data Model
(To be developed during design phase)

### Appendix D: API Specifications
(To be developed during design phase)

### Appendix E: Security Controls Checklist
(To be developed during security design phase)

---

## DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-30 | Requirements Team | Initial draft |

---

**END OF DOCUMENT**
