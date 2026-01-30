# E-Procurement System - Prototype Development Plan
## Executive Summary

**Project**: Town Council E-Procurement System Prototype
**Version**: 1.0
**Date**: 2026-01-30

---

## 1. PROTOTYPE OVERVIEW

### 1.1 Project Goal
Develop a working prototype of an e-Procurement system that demonstrates core functionality, security compliance, and user workflows for Town Council procurement operations managing 60,000+ dwelling units.

### 1.2 Key Success Factors
- MND e-procurement guidelines compliance (100%)
- Secure quotation submission and opening workflows
- User-friendly interface for staff and suppliers
- Robust audit logging and transparency
- ISO 27001 and PDPA compliance readiness

---

## 2. PROTOTYPE SCOPE (MVP)

### 2.1 In Scope

#### Core Features
1. **User Management**
   - Staff login (role-based: Admin, Procurement Officer, Approving Authority, Witness)
   - Supplier registration and approval workflow
   - Multi-factor authentication

2. **RFQ Management**
   - Create and publish RFQ
   - Template-based quotation forms
   - Automatic notifications to suppliers
   - Deadline management

3. **Quotation Submission**
   - Secure supplier portal
   - End-to-end encryption
   - Timestamp recording
   - Tamper-proof submission
   - Alternative quotation support

4. **Quotation Opening**
   - Authorized officer verification
   - Witnessing officer assignment
   - Automated opening at deadline
   - Immutable audit trail
   - MND compliance (no amendments, encryption until close)

5. **Evaluation & Award**
   - Side-by-side comparison
   - Scoring matrix
   - Approval workflow
   - Automated award/rejection notifications (TCFR Rule 78(9))

6. **Security & Compliance**
   - TLS 1.2+ encryption in transit
   - AES-256 encryption at rest
   - Comprehensive audit logging
   - Access control and authorization
   - PDPA consent management

7. **Reporting**
   - RFQ summary reports
   - Audit trail exports
   - Quotation comparison reports

### 2.2 Out of Scope (Future Phases)
- Integration with finance systems (PO, GRN, Invoice)
- Advanced analytics and dashboards
- Mobile applications
- Multi-language support
- Payment processing
- Advanced supplier performance analytics

---

## 3. TECHNICAL ARCHITECTURE

### 3.1 Recommended Technology Stack

```
Frontend:
├── Framework: React.js
├── UI Library: Material-UI or Ant Design
├── State Management: Redux
└── Build Tool: Vite

Backend:
├── Framework: Node.js (Express.js) or Python (FastAPI)
├── API: RESTful with JSON
├── Authentication: JWT + OAuth 2.0
└── Encryption: bcrypt, AES-256, RSA-2048

Database:
├── Primary: PostgreSQL
├── Cache: Redis
└── Backup: Daily automated

Infrastructure:
├── Hosting: AWS or Azure (Singapore region)
├── SSL: Let's Encrypt or commercial
├── Monitoring: CloudWatch or Datadog
└── Log Management: ELK Stack
```

### 3.2 Security Architecture

```
Defense in Depth Layers:
1. Network: Firewall, DDoS protection, SSL/TLS
2. Application: Input validation, CSRF protection, XSS prevention
3. Authentication: MFA, JWT, session management
4. Authorization: RBAC, least privilege
5. Data: Encryption at rest and in transit
6. Audit: Comprehensive logging, SIEM integration
```

---

## 4. DEVELOPMENT PHASES

### Phase 1: Requirements & Design (4 weeks)
**Weeks 1-4**

**Activities**:
- Stakeholder workshops and requirement validation
- UI/UX wireframes and mockups
- Database schema design
- API specification (OpenAPI/Swagger)
- Security architecture design
- Architecture review and approval

**Deliverables**:
- Requirements specification document ✓
- System architecture document
- Database design document
- UI/UX mockups
- API specifications
- Security design document

---

### Phase 2: Development (8 weeks)
**Weeks 5-12**

#### Sprint 1 (Weeks 5-6): Foundation
**Focus**: User Management & Authentication
- User registration and login (staff + supplier)
- Role-based access control
- MFA implementation
- Session management
- Password reset workflow

**Deliverables**:
- Working authentication system
- User management portal
- Unit tests

#### Sprint 2 (Weeks 7-8): RFQ Creation
**Focus**: RFQ Management Module
- RFQ creation form with templates
- Document attachment support
- RFQ publishing workflow
- Approval chain
- Email notifications

**Deliverables**:
- RFQ creation interface
- Approval workflow
- Email notification system
- Unit tests

#### Sprint 3 (Weeks 9-10): Quotation Submission
**Focus**: Supplier Portal & Submission
- Supplier quotation submission form
- File upload functionality
- End-to-end encryption implementation
- Timestamp recording
- Submission confirmation

**Deliverables**:
- Supplier submission portal
- Encryption module
- Submission receipt generation
- Unit tests

#### Sprint 4 (Weeks 11-12): Opening & Evaluation
**Focus**: Quotation Opening & Evaluation
- Authorized opening workflow
- Witnessing officer verification
- Quotation decryption
- Comparison interface
- Award/rejection notifications

**Deliverables**:
- Opening workflow
- Evaluation interface
- Notification system
- Unit tests

#### Sprint 5 (Week 13): Reporting
**Focus**: Reports & Audit Logs
- Audit log viewer
- Report generation (RFQ summary, comparison)
- Export functionality (PDF, Excel)

**Deliverables**:
- Reporting module
- Audit log interface
- Export functionality

#### Sprint 6 (Week 14): Security Hardening
**Focus**: Security & Performance
- Security testing and fixes
- Performance optimization
- Code review
- Vulnerability scanning

**Deliverables**:
- Security test report
- Performance test report
- Hardened application

---

### Phase 3: Testing (4 weeks)
**Weeks 13-16** (overlaps with development)

**Activities**:
- Unit testing (continuous)
- Integration testing
- Security testing (OWASP Top 10, penetration testing)
- Performance testing (load, stress)
- User acceptance testing (UAT)
- Bug fixing and regression testing

**Test Scenarios**:
1. End-to-end RFQ workflow (create → publish → submit → open → evaluate → award)
2. Security scenarios (encryption, access control, audit logging)
3. Concurrent user testing (100+ users)
4. Data integrity testing (quotation tampering prevention)
5. MND compliance validation

**Deliverables**:
- Test plan
- Test cases and scripts
- UAT report
- Bug tracking log
- Performance test report
- Security assessment report

---

### Phase 4: Training & Documentation (3 weeks)
**Weeks 15-17** (overlaps with testing)

**Activities**:
- User manual development
- Admin guide development
- Training material creation (presentations, videos)
- Staff training sessions (2 sessions)
- Supplier training sessions (1 session)
- FAQ compilation

**Deliverables**:
- Staff user manual
- Supplier user manual
- Administrator guide
- Training presentations
- Video tutorials (3-5 videos)
- FAQ document
- Training completion report

---

### Phase 5: Deployment & Go-Live (3 weeks)
**Weeks 18-20**

**Activities**:
- Production environment setup
- Security configuration
- SSL certificate installation
- Data migration (if applicable)
- Pilot testing (limited users)
- Go-live
- Post-launch monitoring and support

**Go-Live Checklist**:
- [ ] Production environment configured
- [ ] Security hardening completed
- [ ] SSL certificate installed
- [ ] Backups configured and tested
- [ ] Monitoring and alerting setup
- [ ] UAT sign-off received
- [ ] User training completed
- [ ] Documentation delivered
- [ ] Support team trained
- [ ] Rollback plan prepared
- [ ] Go/No-Go decision

**Deliverables**:
- Production deployment
- Deployment documentation
- Rollback procedures
- Support handover document
- Go-live report

---

## 5. MND COMPLIANCE CHECKLIST

### Authentication & Encryption
- [x] End-to-end encryption (TLS 1.2+)
- [x] Authentication mechanisms (MFA)
- [x] Standard data exchange (RESTful JSON API)

### Quotation Integrity
- [x] Immutable timestamp recording
- [x] Prevention of unauthorized access
- [x] Tamper-proof submission mechanism
- [x] Encryption until quotation close

### Quotation Opening
- [x] Authorized officer verification
- [x] Witnessing officer (not involved in quotation)
- [x] No amendment capability
- [x] Encrypted storage until close

### Record Keeping
- [x] Record vendor name and address
- [x] Record items quoted
- [x] Record date and time of receipt
- [x] No traditional quotation boxes
- [x] Comprehensive audit trail

### TCFR Compliance
- [x] Award/rejection notification to all bidders
- [x] Communication tracking
- [x] Audit documentation

---

## 6. KEY WORKFLOWS

### 6.1 RFQ Creation Workflow
```
Procurement Officer → Create RFQ → Add specifications → Attach documents
→ Set deadline → Submit for approval → Approving Authority reviews
→ Approve → System publishes RFQ → Email notifications to suppliers
→ RFQ listed on portal
```

### 6.2 Quotation Submission Workflow
```
Supplier logs in → View RFQ → Prepare quotation → Fill form
→ Attach documents → Review → Submit → System encrypts quotation
→ Record timestamp → Generate submission receipt → Send confirmation email
→ Store encrypted quotation
```

### 6.3 Quotation Opening Workflow
```
RFQ deadline reached → Authorized Officer logs in → Initiate opening
→ System verifies authorization → Assign Witnessing Officer
→ Witnessing Officer confirms → System decrypts all quotations
→ Display quotations → Record opening event → Generate audit log
→ Notify procurement officer
```

### 6.4 Evaluation & Award Workflow
```
Procurement Officer reviews quotations → Score using criteria
→ Generate comparison report → Make recommendation
→ Submit for approval → Approving Authority reviews → Approve award
→ System generates award notification → Send to winner
→ System generates rejection notifications → Send to all other bidders
→ Record in audit log
```

---

## 7. DATA MODEL (Simplified)

### Core Entities

```
Users
├── user_id (PK)
├── username
├── email
├── password_hash
├── role (admin, procurement_officer, approving_authority, witness, supplier)
├── mfa_enabled
└── created_at

RFQs
├── rfq_id (PK)
├── title
├── description
├── created_by (FK → Users)
├── status (draft, published, closed, evaluated, awarded)
├── publish_date
├── close_date
├── approval_status
└── approved_by (FK → Users)

Quotations
├── quotation_id (PK)
├── rfq_id (FK → RFQs)
├── supplier_id (FK → Users)
├── encrypted_data (BLOB)
├── submission_timestamp
├── encryption_key_id
├── status (submitted, opened, evaluated, awarded, rejected)
└── is_alternative

Suppliers
├── supplier_id (PK)
├── user_id (FK → Users)
├── company_name
├── registration_number
├── address
├── category
├── approval_status
└── performance_rating

AuditLogs
├── log_id (PK)
├── user_id (FK → Users)
├── action (login, create_rfq, submit_quotation, open_quotation, etc.)
├── entity_type (user, rfq, quotation)
├── entity_id
├── timestamp
├── ip_address
└── details (JSON)
```

---

## 8. API ENDPOINTS (Sample)

### Authentication
```
POST   /api/auth/login
POST   /api/auth/logout
POST   /api/auth/refresh-token
POST   /api/auth/forgot-password
POST   /api/auth/reset-password
POST   /api/auth/mfa/enable
POST   /api/auth/mfa/verify
```

### RFQ Management
```
GET    /api/rfqs                    # List all RFQs
POST   /api/rfqs                    # Create new RFQ
GET    /api/rfqs/:id                # Get RFQ details
PUT    /api/rfqs/:id                # Update RFQ
DELETE /api/rfqs/:id                # Delete RFQ (if draft)
POST   /api/rfqs/:id/publish        # Publish RFQ
POST   /api/rfqs/:id/close          # Close RFQ
GET    /api/rfqs/:id/quotations     # Get all quotations for RFQ
```

### Quotation Management
```
POST   /api/quotations              # Submit quotation
GET    /api/quotations/:id          # Get quotation details
POST   /api/quotations/:id/open     # Open quotation (authorized)
PUT    /api/quotations/:id/evaluate # Evaluate quotation
POST   /api/quotations/:id/award    # Award quotation
POST   /api/quotations/:id/reject   # Reject quotation
```

### Supplier Management
```
GET    /api/suppliers               # List suppliers
POST   /api/suppliers/register      # Register new supplier
GET    /api/suppliers/:id           # Get supplier details
PUT    /api/suppliers/:id           # Update supplier profile
POST   /api/suppliers/:id/approve   # Approve supplier registration
```

### Reports & Audit
```
GET    /api/reports/rfq-summary
GET    /api/reports/quotation-comparison/:rfq_id
GET    /api/audit-logs              # Get audit logs (filtered)
GET    /api/audit-logs/export       # Export audit logs
```

---

## 9. SECURITY REQUIREMENTS

### 9.1 Authentication
- Minimum password: 12 characters (upper, lower, number, special)
- Password expiry: 90 days
- MFA mandatory for staff, optional for suppliers
- Session timeout: 30 minutes inactivity
- Account lockout: 5 failed attempts

### 9.2 Authorization
- Role-based access control (RBAC)
- Least privilege principle
- Segregation of duties (witness cannot be procurement officer for same RFQ)

### 9.3 Data Protection
- TLS 1.2+ for all communications
- AES-256 encryption for quotations at rest
- RSA-2048 for quotation encryption
- Database encryption enabled
- Secure key storage (AWS KMS or Azure Key Vault)

### 9.4 Audit & Monitoring
- Log all user actions
- Log all data modifications
- Immutable log storage
- Real-time alerting for suspicious activities
- Log retention: 7 years minimum

### 9.5 Vulnerability Management
- Regular security scanning
- Penetration testing before go-live
- OWASP Top 10 compliance
- Dependency vulnerability scanning
- Security patch management

---

## 10. TESTING STRATEGY

### 10.1 Unit Testing
- Coverage target: 80%+
- Framework: Jest (frontend), Mocha/PyTest (backend)
- Automated in CI/CD pipeline

### 10.2 Integration Testing
- API endpoint testing
- Database interaction testing
- Third-party service integration (email, storage)

### 10.3 Security Testing
- OWASP Top 10 vulnerability testing
- Penetration testing
- Encryption validation
- Access control testing
- Audit log integrity testing

### 10.4 Performance Testing
- Load testing: 100 concurrent users
- Stress testing: Peak load scenarios
- Database query optimization
- API response time validation

### 10.5 User Acceptance Testing (UAT)
- Test scenarios covering all user roles
- End-to-end workflow validation
- MND compliance verification
- Usability feedback collection

---

## 11. RISK MANAGEMENT

### High Priority Risks

| Risk | Mitigation Strategy | Contingency Plan |
|------|---------------------|------------------|
| **Encryption key loss** | - Use managed key service (KMS)<br>- Implement key rotation<br>- Maintain key backup | - Key recovery procedure<br>- Emergency access protocol |
| **Quotation tampering** | - Digital signatures<br>- Blockchain-style audit trail<br>- Immutable timestamps | - Forensic investigation tools<br>- Incident response plan |
| **Security breach** | - Defense in depth<br>- Regular security audits<br>- Penetration testing | - Incident response team<br>- Data breach notification process |
| **Data loss** | - Daily automated backups<br>- Offsite backup storage<br>- Backup testing | - Disaster recovery plan<br>- RTO: 4 hours, RPO: 24 hours |
| **Low user adoption** | - Comprehensive training<br>- User-friendly design<br>- Change management | - Extended training period<br>- Dedicated support hotline |

---

## 12. DELIVERABLES SUMMARY

### Software Deliverables
- [ ] Deployed prototype application (staging environment)
- [ ] Source code repository (GitHub/GitLab)
- [ ] Database scripts and migration files
- [ ] CI/CD pipeline configuration
- [ ] Deployment scripts and configurations

### Documentation Deliverables
- [x] Requirements specification document
- [x] Prototype development plan
- [ ] System architecture document
- [ ] Database design document
- [ ] API documentation (Swagger/OpenAPI)
- [ ] Security design document
- [ ] User manual (staff)
- [ ] User manual (supplier)
- [ ] Administrator guide
- [ ] Training materials (presentations, videos)
- [ ] Test plan and test results
- [ ] UAT report
- [ ] Go-live checklist

### Project Management Deliverables
- [ ] Project charter
- [ ] Sprint plans and retrospectives
- [ ] Risk register
- [ ] Issue tracking log
- [ ] Weekly status reports
- [ ] Final project report

---

## 13. ACCEPTANCE CRITERIA

### Functional Acceptance
- [ ] All MVP features implemented and working
- [ ] End-to-end RFQ workflow functional
- [ ] Quotation encryption/decryption working correctly
- [ ] Audit logging comprehensive and accurate
- [ ] Notifications delivered successfully
- [ ] Reports generated correctly

### Security Acceptance
- [ ] MND guidelines compliance verified (100%)
- [ ] Encryption implemented correctly
- [ ] Access control functioning as designed
- [ ] Audit trail immutable and complete
- [ ] Security testing passed (no critical vulnerabilities)
- [ ] PDPA compliance verified

### Performance Acceptance
- [ ] System availability ≥ 99.9% during testing
- [ ] Page load time < 3 seconds
- [ ] Support 100 concurrent users
- [ ] Report generation < 10 seconds
- [ ] Database queries < 1 second

### Usability Acceptance
- [ ] User satisfaction score ≥ 4.0/5.0
- [ ] Training completion rate 100%
- [ ] User manual clarity rating ≥ 4.0/5.0
- [ ] Cross-browser compatibility verified

### UAT Acceptance
- [ ] All test scenarios passed
- [ ] No critical or high-priority bugs
- [ ] Stakeholder sign-off received
- [ ] Go-live criteria met

---

## 14. POST-LAUNCH SUPPORT

### Week 1-4 (Hyper-care Period)
- Dedicated support team on standby
- Daily system health checks
- Issue resolution SLA: 2 hours
- Daily status reports to stakeholders
- User feedback collection

### Month 2-3 (Stabilization)
- Regular support hours (9 AM - 6 PM)
- Weekly system health reports
- Monthly review meetings
- Bug fix releases as needed

### Month 4+ (Steady State)
- Standard SLA applies
- Monthly maintenance windows
- Quarterly system reviews
- Feature enhancement planning

---

## 15. SUCCESS METRICS

### Business Metrics
- **RFQ Cycle Time**: Baseline vs. improved (target: 30% reduction)
- **Supplier Participation**: Number of active suppliers (target: 20% increase)
- **Process Transparency**: Stakeholder satisfaction score (target: 90%+)
- **Cost Savings**: Procurement cost reduction (target: 10%)

### Technical Metrics
- **System Availability**: ≥ 99.9%
- **Performance**: Average page load < 3 seconds
- **Security**: Zero critical security incidents
- **User Adoption**: 80%+ active user rate

### Compliance Metrics
- **MND Compliance**: 100% adherence
- **PDPA Compliance**: 100% adherence
- **Audit Findings**: Zero critical findings
- **Data Integrity**: Zero tampering incidents

---

## 16. BUDGET ESTIMATE (Indicative)

### Development Costs
- Requirements & Design: 10-15% of total
- Development: 50-60% of total
- Testing: 15-20% of total
- Training & Documentation: 5-10% of total
- Deployment: 5-10% of total

### Ongoing Costs (Annual)
- Hosting (cloud infrastructure): $X,XXX/year
- SSL certificates: $XXX/year
- Security tools and scanning: $X,XXX/year
- Monitoring and logging: $XXX/year
- Support and maintenance: 15-20% of development cost

*(Actual costs to be provided in pricing schedule)*

---

## 17. TIMELINE SUMMARY

```
Total Duration: 20 weeks

Week 1-4:   Requirements & Design          ████░░░░░░░░░░░░░░░░
Week 5-14:  Development (6 sprints)        ░░░░██████████░░░░░░
Week 13-16: Testing                        ░░░░░░░░░░░░████░░░░
Week 15-17: Training & Documentation       ░░░░░░░░░░░░░░███░░░
Week 18-20: Deployment & Go-Live           ░░░░░░░░░░░░░░░░░███

Milestones:
├─ Week 4:  Design approval
├─ Week 8:  Development mid-point review
├─ Week 14: Development complete
├─ Week 16: UAT sign-off
└─ Week 20: Go-live
```

---

## 18. NEXT STEPS

### Immediate Actions (Week 1)
1. **Stakeholder Kickoff Meeting**
   - Review requirements document
   - Clarify expectations
   - Confirm timeline and budget

2. **Team Formation**
   - Assign project manager
   - Assemble development team
   - Identify Town Council SMEs

3. **Environment Setup**
   - Provision development environment
   - Setup version control repository
   - Configure project management tools

4. **Requirements Workshop**
   - Validate functional requirements
   - Review user personas and scenarios
   - Prioritize features (MoSCoW)

### Week 2-4 Actions
1. **Design Phase**
   - Create UI/UX wireframes
   - Design database schema
   - Define API specifications
   - Security architecture design

2. **Procurement**
   - Finalize technology stack
   - Setup cloud infrastructure
   - Acquire development tools and licenses

3. **Project Planning**
   - Detailed sprint planning
   - Resource allocation
   - Risk assessment and mitigation planning

---

## 19. APPROVAL & SIGN-OFF

### Document Review
| Role | Name | Signature | Date |
|------|------|-----------|------|
| Town Council Representative | | | |
| Project Manager | | | |
| Technical Lead | | | |
| Security Officer | | | |

### Change Control
All changes to this plan must be reviewed and approved through the change control process.

---

## 20. CONTACT INFORMATION

**Project Team**
- Project Manager: [Name, Email, Phone]
- Technical Lead: [Name, Email, Phone]
- Business Analyst: [Name, Email, Phone]

**Town Council Contacts**
- Procurement Lead: [Name, Email, Phone]
- IT Lead: [Name, Email, Phone]
- Security Officer: [Name, Email, Phone]

**Escalation**
- Level 1: Project Manager
- Level 2: Technical Lead
- Level 3: Program Director

---

**Document Version**: 1.0
**Last Updated**: 2026-01-30
**Next Review**: Week 4 (Design Approval)

---

**END OF PLAN**
