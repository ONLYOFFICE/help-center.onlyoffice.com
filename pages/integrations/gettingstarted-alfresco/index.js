import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getAllArticles from "@lib/strapi/getArticles";

import ReactHtmlParser from 'react-html-parser'
import Layout from "@components/layout";
import HeadingContent from "@components/screens/header-content";
import Footer from "@components/screens/footer-content";
import SingleContent from "@components/screens/single-content";
import DownloadArea from "@components/screens/single-content/download-area";
import QuestionArea from "@components/screens/single-content/question-area";

const GettingStartedAlfrescoPage = ({ locale, articles }) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Layout.PageHead></Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} template={false} currentLanguage={locale} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <SingleContent t={t} currentLanguage={locale} articles={articles.data}>
          <div className="wrapper">
            <div className="border-content">
              <h3>About the ONLYOFFICE and Alfresco integration</h3>
              <div>
                <span className="tag">collaborative editing</span>
                <span className="tag">Docker version</span>
                <span className="tag">Linux version</span>
                <span className="tag">local server</span>
                <span className="tag">ONLYOFFICE Docs</span>
                <span className="tag">open source version</span>
                <span className="tag">install server solution</span>
              </div>
            </div>
            <div className="border-content">
              <div className="notehelp">
                To learn more about how it works and how to compile the ONLYOFFICE connector for Confluence, please visit our <a href="https://api.onlyoffice.com/editors/confluence" target="_blank"><b>API documentation</b></a>.
              </div>
              <div>
              </div>
              <div id="MainFeatures_block" className="gs_submenu">
                <h4>Main features</h4>
                <ul>
                  <li>Creating, editing and viewing text documents, spreadsheets, and presentations.</li>
                  <li>Converting files.</li>
                  <li>Co-editing documents in real-time: two co-editing modes (Fast and Strict), the Track Changes mode, comments, and the built-in chat.</li>
                  <li><b>JWT support</b> to secure your traffic so that no one can have access to your documents with the exception of the users with proper rights.</li>
                </ul>
              </div>
              <div id="SupportedFormats_block" className="gs_submenu">
                <h4>Supported formats</h4>
                <ul>
                  <li>For creating, editing and viewing: DOCX, PPTX, XLSX</li>
                  <li>For working with forms: OFORM, DOCXF</li>
                  <li>For conversion:  ODT, ODP, ODS, DOC, XLS, PPT, RTF</li>
                  <li>For editing via conversion to OOXML: ODP, ODS, ODT, RTF, CSV, TXT</li>
                  <li>For viewing only: PDF</li>
                </ul>
              </div>
              <div id="Whatsnew_block" className="gs_submenu">
                <h4>What's new in version 6.0.0</h4>
                <p><b>Added</b></p>
                <ul>
                  <li>Creating new file from document editor</li>
                  <li>Creating new file from document editor from document template</li>
                  <li>Add action "download as" from document manager</li>
                  <li>Compare file from storage</li>
                  <li>Mail merge from storage</li>
                  <li>Insert image from storage</li>
                  <li>Add history of file changes, highlighting changes between versions</li>
                  <li>Customization document editor view</li>
                  <li>Mark as favorite from document editor</li>
                  <li>Add goBack url for document editor</li>
                  <li>Change favicon in editor by document type</li>
                  <li>Detecting mobile browser</li>
                  <li>Galician empty file templates</li>
                </ul>
              </div>
              <p><b>Fixed</b></p>
              <ul>
                <li>Loading preview on document-details page</li>
                <li>Bug when user with role CONTRIBUTOR can't join to editing</li>
                <li>Document Server v6.0 and earlier is no longer supported</li>
              </ul>
              <p>The full change log is available <a href="https://github.com/ONLYOFFICE/onlyoffice-alfresco/blob/master/CHANGELOG.md" target="_blank"><b>here</b></a>.</p>
            </div>
            <div className="border-content" id="OnlineEditorsIntegration_block">
              <h3>Connecting ONLYOFFICE Docs to Alfresco Share</h3>

              <div className="gs_content gs_submenu" id="Requirements_block">
                <h3>Requirements</h3>
                <ul>
                  <li>ONLYOFFICE Document Server v7.1 or later
                    <p>You need an instance of ONLYOFFICE Docs that is resolvable and connectable both from Alfresco and any end clients. It must be able to POST to Alfresco directly.</p>
                    <div className="notehelp">
                      Please refer to the official <a href="https://helpcenter.onlyoffice.com/installation/docs-index.aspx" target="_blank"><b>documentation page</b></a> to learn more about installing ONLYOFFICE Docs.
                    </div>
                  </li>
                  <li>Alfresco v.5.2 - 7.2</li>
                  <li>ONLYOFFICE Connector 6.0.0 for Alfresco</li>
                </ul>
              </div>

              <div className="gs_content gs_submenu" id="Install_block">
                <h4>Installing ONLYOFFICE and Alfresco module package</h4>
                <p>The latest compiled package files are available on <a target="_blank" href="https://github.com/onlyoffice/onlyoffice-alfresco/releases"><b>GitHub</b></a>. You need the <em>onlyoffice-integration-repo.jar</em> and the <em>onlyoffice-integration-share.jar</em> files. If you plan to compile the ONLYOFFICE and Alfresco module package yourself for some reason (e.g. edit the source code and compile it afterwards), address the <a href="https://api.onlyoffice.com/editors/alfresco" target="_blank"><b>developer instruction</b></a>.</p>
                <ol>
                  <li>Download compiled packages in the <em>repo</em> and <em>share</em> directories:<pre className="prettyprint prettyprinted"><code><span className="pln">cd onlyoffice</span><span className="pun">-</span><span className="pln">alfresco</span><span className="pun">/</span><br /><span className="pln">mvn clean install</span></code></pre></li>
                  <li>Upload the compiled <b>*.jar</b> packages to directories accordingly for your Alfresco installation:
                    <ul>
                      <li>from <em>onlyoffice-alfresco/repo/target/</em> to the <em>/webapps/alfresco/WEB-INF/lib/</em> for Alfresco repository.</li>
                      <li>from <em>onlyoffice-alfresco/share/target/</em> to <em>/webapps/share/WEB-INF/lib/ for Share</em>.</li>
                    </ul>
                  </li>
                  <li><p>(Optional) Edit the <b>alfresco-global.properties</b> file to specify correct hostnames, open ports and protocols as alfresco and share are deployed as two separate services.</p>
                    <pre className="prettyprint prettyprinted">
                      <code>
                        <span className="pln">alfresco</span><span className="pun">.</span>
                        <span className="pln">host</span><span className="pun">=&lt;</span>
                        <span className="pln">hostname</span><span className="pun">&gt;</span><br />
                        <span className="pln">alfresco</span>
                        <span className="pun">.</span>
                        <span className="pln">port</span>
                        <span className="pun">=</span>
                        <span className="lit">443</span><br />
                        <span className="pln">alfresco</span>
                        <span className="pun">.</span>
                        <span className="pln">protocol</span>
                        <span className="pun">=</span>
                        <span className="pln">https<br /><br />share</span>
                        <span className="pun">.</span>
                        <span className="pln">host</span>
                        <span className="pun">=&lt;</span>
                        <span className="pln">hostname</span>
                        <span className="pun">&gt;</span><br />
                        <span className="pln">share</span>
                        <span className="pun">.</span>
                        <span className="pln">port</span>
                        <span className="pun">=</span>
                        <span className="lit">443</span><br />
                        <span className="pln">share</span>
                        <span className="pun">.</span>
                        <span className="pln">protocol</span>
                        <span className="pun">=</span>
                        <span className="pln">https</span>
                      </code>
                      </pre>
                  </li>
                  <li>Restart Alfresco
                    <pre className="prettyprint prettyprinted"><code><span className="pln">sudo </span><span className="pun">./</span><span className="pln">alfresco</span><span className="pun">.</span><span className="pln">sh stop<br />
                    sudo </span><span className="pun">./</span><span className="pln">alfresco</span><span className="pun">.</span><span className="pln">sh start</span></code></pre>
                  </li>
                  <li>Check if the module is present in the list at <em>/share/page/console/admin-console/module-package</em>.</li>
                </ol>   
              </div>

              <div className="gs_content gs_submenu" id="Configure_block">
                <h4>Configuring ONLYOFFICE and Alfresco module package</h4>
                <p>Go to <b>Alfresco Administration Console</b>. Open <code>http://&lt;alfrescohost&gt;/alfresco/s/onlyoffice/onlyoffice-config</code> and specify the following parameters.</p>
                <p>Document Server settings:</p>
                <ul>
                  <li><b>Document Editing Service address</b> - specify the URL address where the Document Editing Service is installed.</li>
                  <li><b>Secret Key</b> - specify the secret used to sign the data. For more details, see the <a href="/integration/gettingstarted-alfresco.aspx#JWT_block">Enabling JWT for the ONLYOFFICE and Alfresco integration</a> section of this article.</li>
                </ul>
                <p>Advanced server settings:</p>
                <ul>
                  <li><b>Document Editing Service address for internal requests from the Alfresco server</b> - specify the address that is used to access Document Editing Service from Alfresco server.</li>
                  <li><b>Alfresco server address for internal requests from the Document Editing Service</b> - specify the address that is used to access Alfresco server from Document Editing Service.</li>
                </ul>
                <p>Common settings:</p>
                <ul>
                  <li><b>Ignore SSL Certificate</b> - turns SSL off.</li>
                  <li><b>Enable Force Save</b> - enables saving document changes directly to the Alfresco storage after clicking the Save button (if disabled, the document is saved in the document editor's cache until the document is closed).</li>
                  <li><b>Save docx, xlsx, pptx as a new version of the original file after conversion</b> - if disabled, a separate file will be created and placed in the same folder.</li>
                  <li><b>Open the file for editing</b> - allows administrators to choose the document formats to edit via conversion to OOXML formats.</li>
                </ul>
                <div className="screen_block">
                  <img alt="Settings_menu" target="Settings_menu" className="screenphoto screen_guides" src="/images/single/integrations/alfresco/small/config_small.png" />     
                  <div target="Settings_menu" className="screenphoto magnifier"></div>
                </div>
              </div>

              <div className="gs_content gs_submenu" id="JWT_block">
                <h4>Enabling JWT for the ONLYOFFICE and Alfresco integration</h4>
                <p>To protect documents from unauthorized access, ONLYOFFICE editors use the JSON Web Token (JWT). The <b>token</b> is added in the configuration when the Document Editor is initialized and during the exchange of commands between inner ONLYOFFICE Docs services. The <b>secret key</b> is used to sign the JSON web token and validate the token upon the request to ONLYOFFICE Docs.</p>
                <p>To protect your documents, you need to enable the token validation and specify your own secret key in the ONLYOFFICE Docs configuration file, then specify the same secret key in the connector settings.</p>
                <p><b>Step 1</b>: Configure ONLYOFFICE Docs</p>
                <ol>
                  <li>Open the local.json file with any available text editor.
                    <ul>
                      <li>For Linux - <code>/etc/onlyoffice/documentserver/local.json</code></li>
                      <li>For Windows - <code>%ProgramFiles%\ONLYOFFICE\DocumentServer\config\local.json</code></li>
                      <li>For Docker - enter the ONLYOFFICE Docs container using the <code>docker exec -it &lt;containerID&gt; bash</code> command and open <code>/etc/onlyoffice/documentserver/local.json</code></li>
                    </ul>
                  </li>
                  <li>Enable token validation by changing the <code>false</code> value to <code>true</code> in three sections:
                    <ul>
                      <li><code>services.CoAuthoring.token.enable.browser</code></li>
                      <li><code>services.CoAuthoring.token.enable.request.inbox</code></li>
                      <li><code>services.CoAuthoring.token.enable.request.outbox</code></li>
                    </ul>
                  </li>
                  <li>Specify your own secret key by replacing the secret value with your own text string in three sections. The secret key must be the same.
                    <ul>
                      <li><code>services.CoAuthoring.secret.inbox.string</code></li>
                      <li><code>services.CoAuthoring.secret.outbox.string</code></li>
                      <li><code>services.CoAuthoring.secret.session.string</code></li>
                    </ul>
                    {
                      ReactHtmlParser(`<pre class="prettyprint prettyprinted"><code><span class="pun">{</span><span class="pln">
                      </span><span class="str">"services"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                        </span><span class="str">"CoAuthoring"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                          </span><span class="str">"token"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                            </span><span class="str">"enable"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                              </span><span class="str">"request"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                                </span><span class="str">"inbox"</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln">
                                </span><span class="str">"outbox"</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
                              </span><span class="pun">},</span><span class="pln">
                              </span><span class="str">"browser"</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
                            </span><span class="pun">}</span><span class="pln">
                          </span><span class="pun">},</span><span class="pln">
                          </span><span class="str">"secret"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                            </span><span class="str">"inbox"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                              </span><span class="str">"string"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"yoursecret"</span><span class="pln">
                            </span><span class="pun">},</span><span class="pln">
                            </span><span class="str">"outbox"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                              </span><span class="str">"string"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"yoursecret"</span><span class="pln">
                            </span><span class="pun">},</span><span class="pln">
                            </span><span class="str">"session"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                              </span><span class="str">"string"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"yoursecret"</span><span class="pln">
                            </span><span class="pun">}</span><span class="pln">
                          </span><span class="pun">}</span><span class="pln">
                        </span><span class="pun">}</span><span class="pln">
                      </span><span class="pun">}</span><span class="pln">
                    </span><span class="pun">}</span></code></pre>`)
                    }
                  </li>
                  <li>Save your changes.</li>
                  <li>Restart the services for the config changes to take effect.
                      <pre className="prettyprint prettyprinted"><code><span className="pln">supervisorctl restart all</span></code></pre>
                  </li>
                </ol>
                <p><b>Step 2</b>: Specify the same secret key in the connector settings</p>
                <p>In the connector settings, specify the same secret in the <b>Secret key</b> field and save the settings.</p>
              </div>

              <div className="gs_content gs_submenu" id="Demo_block">
                <h3>Connecting to the demo ONLYOFFICE Docs</h3>
                <p>Starting from <a href="https://github.com/ONLYOFFICE/onlyoffice-alfresco/releases/tag/v5.0.0" target="_blank"><b>ONLYOFFICE connector version 5.0.0</b></a>, you can try ONLYOFFICE online editors within Alfresco without installing ONLYOFFICE Docs.</p>
                <p>To turn the connection on, click the <b>Connect to demo ONLYOFFICE Document Server</b> checkbox and click the <b>Save</b> button.</p>
                <div className="notehelp">This is a public test server that will be available during a 30-day period. Don’t share your sensitive data there.</div>
              </div>
            </div>
            <div className="border-content" id="StartUsing_block">
              <h3>Start using ONLYOFFICE Docs within Alfresco</h3>
              <div className="PortalHelp">
                <p>To create a document:</p>
                <ol>
                  <li>Open the folder where you want to create a document.</li>
                  <li>Click the <b>Create...</b> button.</li>
                  <li>Choose the file type you want to create: Document, Spreadsheet or Presentation.</li>
                </ol>
                <div className="screen_block">
                  <img alt="new_menu" target="new_menu" className="screenphoto screen_guides" src="/images/single/integrations/alfresco/small/new_small.png" />     
                  <div target="new_menu" className="screenphoto magnifier"></div>
                </div>
                <p>To edit or view a document:</p>
                <ol>
                  <li>Find the required document.</li>
                  <li>Click the <b>Edit in ONLYOFFICE</b> button.</li>
                </ol>
                <div className="screen_block">
                  <img alt="edit_menu" target="edit_menu" className="screenphoto screen_guides" src="/images/single/integrations/alfresco/small/edit_small.png" />     
                  <div target="edit_menu" className="screenphoto magnifier"></div>
                </div>
                <p>To convert a non-XML document into XML format (DOCX, XLSX or PPTX):</p>
                <ol>
                  <li>Find the required document.</li>
                  <li>Click the <b>Convert using ONLYOFFICE</b> button.</li>
                </ol>
                <p>The document will be automatically converted into its XML analog. Resulting files are placed in the same folder. You can also configure automatic converting rules for a folder. For more information about the rule configuration, please read the <a href="https://docs.alfresco.com/5.1/tasks/library-folder-rules-define-create.html" target="_blank"><b>official Alfresco documentation</b></a>.</p>
                <div className="screen_block">
                  <img alt="convert_menu" target="convert_menu" className="screenphoto screen_guides" src="/images/single/integrations/alfresco/small/convert_small.png" />     
                  <div target="convert_menu" className="screenphoto magnifier"></div>
                </div>
                <p>To download the file in a preferred format:</p>
                <ol>
                  <li>Find the required file.</li>
                  <li>Click the <b>Download as...</b> button and choose the format you need.</li>
                </ol>
                <div className="screen_block">
                  <img alt="download_menu" target="download_menu" className="screenphoto screen_guides" src="/images/single/integrations/alfresco/small/download_small.png" />     
                  <div target="download_menu" className="screenphoto magnifier"></div>
                </div>
                <p>To see the history of file changes:</p>
                <ol>
                  <li>Click the file name or its icon to open the file details tab.</li>
                  <li>Find the <b>Version History</b> tab in the right panel.</li>
                  <li>The available sections are: <em>Latest Version</em> and <em>Older Versions</em>. The changes made to the file will be highlighted.</li>
                  <li>To upload a new version, click the corresponding icon in the top right corner.</li>
                  <li>To quickly see the current file version, hover the mouse pointer over the file. The version number will be displayed to the right of the file name, e.g. <img src="/images/single/integrations/alfresco/small/version_history_icon.png" />.</li>
                </ol>
                <p>or</p>
                <ol>
                  <li>Go to the <b>File</b> tab in the editor.</li>
                  <li>Choose the <b>Version History</b> option in the menu.</li>
                </ol>
                <p>To create a new file right in the Document Editor:</p>
                <ol>
                  <li>Open the <b>File</b> tab.</li>
                  <li>Click the <b>Create New</b> option.</li>
                </ol>
                <p>A new <code>.docx</code> file will be opened in a new tab.</p>
                <p>To create custom templates:</p>
                <ol>
                  <li>Log in to your Alfresco portal as administrator who created it.</li>
                  <li>Go to <b>My files</b> -&gt; <b>Data Dictionary</b> -&gt; <b>Node Templates</b>.</li>
                  <li>Add custom templates in the available formats: <code>.docx</code>, <code>.xlsx</code>, <code>.pptx</code>.</li>
                </ol>
                <div className="screen_block">
                  <img alt="create_template" target="create_template" className="screenphoto screen_guides" src="/images/single/integrations/alfresco/small/create_template_small.png" />     
                  <div target="create_template" className="screenphoto magnifier"></div>
                </div>
                <p>To create documents from templates:</p>
                <ol>
                  <li>Open the folder where you want to create a document.</li>
                  <li>Click the <b>Create...</b> button.</li>
                  <li>Select the <b>Create document from template</b> option and choose one of the available templates.
                    <div className="screen_block">
                      <img alt="create_from_template" target="create_from_template" className="screenphoto screen_guides" src="/images/single/integrations/alfresco/small/create_from_template_small.png" />     
                      <div target="create_from_template" className="screenphoto magnifier"></div>
                    </div>
                    <p>or</p>
                  </li>
                </ol>
                <ol>
                  <li>In the editor go to the <b>File</b> tab.</li>
                  <li>Click the <b>Create New...</b> option.</li>
                  <li>Choose the required template.
                    <div className="screen_block">
                      <img alt="create_from_template_editor" target="create_from_template_editor" className="screenphoto screen_guides" src="/images/single/integrations/alfresco/small/create_from_template_editor_small.png" />     
                      <div target="create_from_template_editor" className="screenphoto magnifier"></div>
                    </div>
                  </li>
                </ol>
                <hr />
                <p>To learn how to compare files from storage, please follow the instructions from <a href="https://helpcenter.onlyoffice.com/ONLYOFFICE-Editors/ONLYOFFICE-Document-Editor/HelpfulHints/Comparison.aspx">this article</a>.</p>     
                <div className="screen_block">
                  <img alt="compare_files" target="compare_files" className="screenphoto screen_guides" src="/images/single/integrations/alfresco/small/compare_files_small.png" />     
                  <div target="compare_files" className="screenphoto magnifier"></div>
                </div>
                <p>To learn how to use mail merge from storage, please follow the instructions from <a href="https://helpcenter.onlyoffice.com/onlyoffice-editors/onlyoffice-document-editor/usageinstructions/usemailmerge.aspx">this article</a>.</p>
                <div className="screen_block">
                  <img alt="mail_merge" target="mail_merge" className="screenphoto screen_guides" src="/images/single/integrations/alfresco/small/mail_merge_small.png" />     
                  <div target="mail_merge" className="screenphoto magnifier"></div>
                </div>
                <p>To learn how to insert images from storage, please follow the instructions from <a href="https://helpcenter.onlyoffice.com/onlyoffice-editors/onlyoffice-document-editor/usageinstructions/insertimages.aspx">this article</a>.</p>
                <div className="screen_block">
                  <img alt="insert_images" target="insert_images" className="screenphoto screen_guides" src="/images/single/integrations/alfresco/small/insert_images_small.png" />     
                  <div target="insert_images" className="screenphoto magnifier"></div>
                </div>
                <p>To learn how to mark the document as favorite right in the Document Editor, please follow the instructions from <a href="https://helpcenter.onlyoffice.com/userguides/groups-gettingstarted-documents.aspx">this article</a>.</p>
                <div className="screen_block">
                  <img alt="mark_fav" target="mark_fav" className="screenphoto screen_guides" src="/images/single/integrations/alfresco/small/mark_fav_small.png" />     
                  <div target="mark_fav" className="screenphoto magnifier"></div>
                </div>
              </div>
            </div>
          </div>

          <DownloadArea className="download-area" t={t} />
          <QuestionArea t={t} />
        </SingleContent>
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  );
};

export async function getServerSideProps({ locale }) {
  const articles = await getAllArticles(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      articles
    },
  }
}

export default GettingStartedAlfrescoPage;