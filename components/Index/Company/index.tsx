import { FC } from 'react'
import Accordian from '../../Accordian'
import FooterForm from '@components/FooterForm'
import Link from 'next/link'

export const Company: FC = () => {
  return (
    <>
      {/* <section
        className="page-title parallaxie"
        data-bg-img="/images/08.jpg"
        style={{
          backgroundImage: 'url("/images/08.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center 39.435px',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>About Tally Erp9 Software</h1>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Tally Erp9 Softwarex
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section> */}
      <section className="pb-3">
        <div className="container">
          <div className="row justify-content-center flex-flow-row-reverse">
            <div className="col-md-4">
              <div className="tab-head">
                <h4 className="service-head mb-0">Tally Products</h4>
                <div
                  id="accordion"
                  className="accordion tabArea"
                  style={{
                    paddingLeft: '30px',
                    paddingRight: '30px',
                    paddingTop: '15px',
                    paddingBottom: '15px',
                  }}
                >
                  <Accordian />
                </div>
              </div>
              <div className="tab-head">
                <h4 className="service-head mb-0">Tally Products</h4>
                <div id="accordion" className="accordion tabArea">
                  {/*<div class="card-header1">*/}
                  {/*  <h6 class="mb-0">*/}
                  {/*    <Link href="tally-erp9-software-quotation.php" class="collapsed">Our Quotation</Link>*/}
                  {/*  </h6>*/}
                  {/*</div>*/}
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/services/customization/dedicated"
                        className="collapsed"
                      >
                        Customization Services
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/services/training/site"
                        className="collapsed"
                      >
                        Tally Corporate Training
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/services/netsubscription"
                        className="collapsed"
                      >
                        Tally.Net Services
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/services/advisoryservices"
                        className="collapsed"
                      >
                        Business Advisory Services
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link href="/services/supportcover" className="collapsed">
                        {' '}
                        Annual Support Cover
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/services/syncimplementaion"
                        className="collapsed"
                      >
                        {' '}
                        Data Synchronization
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/download/instantsupport"
                        className="collapsed"
                      >
                        Priority Tally Support
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="tab-head">
                <h4 className="service-head mb-0">Useful Links</h4>
                <div id="accordion" className="accordion tabArea">
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/solutions/addonmodules"
                        className="collapsed"
                      >
                        Tally Academy Solution
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/solutions/corpmanangement"
                        className="collapsed"
                      >
                        Corporate Management
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/solutions/verticalsolutions"
                        className="collapsed"
                      >
                        Vertical Solutions for Tally{' '}
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/solutions/tallyintegration"
                        className="collapsed"
                      >
                        Tally Integration
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link href="/company/clientage" className="collapsed">
                        Our Esteemed Clientage
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/download/instantsupport"
                        className="collapsed"
                      >
                        Instant Support
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="tab-head">
                <h4 className="service-head mb-0">Ask for a service</h4>
                <div
                  className="tabArea"
                  style={{
                    paddingTop: '20px',
                    paddingBottom: '20px',
                    paddingRight: '10px',
                  }}
                >
                  <FooterForm />
                </div>
              </div>{' '}
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="section-title">
                <h2 className="title">Tally.ERP 9</h2>
                <div className="row">
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Tally.ERP 9</p>
                      </div>
                      <p className="p-3">
                        At Tally, we have a hard-earned reputation for
                        empowering businesses with stable, effective software
                        products and Tally.ERP 9 takes this further. Tally.ERP 9
                        has all the features required for high-performance
                        business management.
                      </p>
                      <Link
                        className="p-3 d-block"
                        href="about-tally-erp9-software.php"
                      >
                        Read More &gt;&gt;
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Tally.ERP 9 - Auditors Edition</p>
                      </div>
                      <p className="p-3">
                        A growing economy, widening tax net and increasing
                        compliance requirements make an Auditor&apos;s role
                        critical. For a Chartered Accountant like yourself, this
                        could mean time is at a premium. Travel and people costs
                        escalate by the day. Manpower is in short supply.
                        Instead of an ideal level workload across the year, you
                        have short periods of intense work. You can turn all
                        this around. Presenting Tally.ERP 9 - Auditors Edition,
                        a powerful tool exclusively for CAs...
                      </p>
                      <Link
                        className="p-3 d-block"
                        href="about-tally-erp9-Auditor-edition.php"
                      >
                        Read More &gt;&gt;
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Tally.ERP 9 - Rental</p>
                      </div>
                      <p className="p-3">
                        With over 90% (estimated) businesses in India using
                        Tally.ERP 9 (and earlier versions), there falls on us a
                        tremendous responsibility to further ease availability
                        and affordability. Your feedback has reached us - We
                        hear you!...
                      </p>
                      <Link
                        className="p-3 d-block"
                        href="tally-erp9-software-on-rent.php"
                      >
                        Read More &gt;&gt;
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Tally Shoper 9</p>
                      </div>
                      <p className="p-3">
                        When it comes to retail/point-of-sale (POS) business
                        management, there&apos;s very little choice beyond
                        Shoper 9. A culmination of intensive R&amp;D, this
                        mature, ready-to-go product which incorporates the
                        smartest ideas, provides quick implementation and
                        intuitive usage. A host of retail verticals rely on
                        Shoper 9. It can scale and will provide
                        information-at-the-fingertips to managers of chain
                        stores. The affordable Shoper 9-the latest product from
                        Tally-can be adapted to meet unique requirements and
                        will save time, increase accuracy and provide real time
                        reports...
                      </p>
                      <Link
                        className="p-3 d-block"
                        href="Tally-Shoper-features-details.php"
                      >
                        Read More &gt;&gt;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
