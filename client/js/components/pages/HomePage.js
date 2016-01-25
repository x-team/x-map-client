import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  constructor () {
    super();
    this.state = { visibility: false };
  }

  onClick () {
    this.setState({ visibility: true });
  }

  render() {
    let visibility = this.state.visibility ? 'hidden' : '';
    // to do: remove hidden class if click in the home logo
    return (
      <div className={ 'panel homepage ' + visibility }>
        <article>
          <section>
            <h2>Welcome to X-Map</h2>
            <p>Please <Link to="/login">Log in</Link> or <Link to="/register">Register</Link> to proceed.</p>
            <p>An <a href="https://github.com/x-team/x-map/" target="_blank">open source</a> project at <a href="http://x-team.com/community/" target="_blank">X-Team</a></p>
            <button onClick={ this.onClick.bind(this) }>Click to hide panel.</button>
          </section>
        </article>

        <hr />

        <article>
          <header>
            <h1>Base content styles</h1>
            <p>will have here an arrow for collapsible behavior</p>
          </header>

          <section>
            <h2>Typography</h2>

            <p>Normal paragraph text. <b>Bold text.</b> <i>Italic text.</i> <em>Emphasized text.</em> <code>Code text.</code> <big>Big text.</big> <small>Small text.</small> <del>Delete text.</del> <ins>Insert text.</ins></p>
            <p><kbd>Keyboard text - text to be entered by the user.</kbd></p>
            <p><dfn>Definition.</dfn>: To define the meaning of a word, phrase or term.</p>
            <p>Paragraph with break...<br />...line.</p>

            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>

            <pre><code>
            #header h1 a
              display: block;
              width: 300px;
              height: 80px;

            </code></pre>

            <blockquote>
              <p>Paragraph in the blockquote.</p>
              <p>Paragraph in the blockquote. Lorem ipsum. Paragraph in the blockquote. Paragraph in the blockquote. Lorem ipsum. Paragraph in the blockquote. Paragraph in the blockquote.</p>
              <cite>Citation text in the blockquote.</cite>
            </blockquote>

            <ul>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
              <li>Vestibulum auctor dapibus neque.</li>
              <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
              <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
              <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
              <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
            </ul>

            <ol>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
              <li>Vestibulum auctor dapibus neque.</li>
            </ol>

            <dl>
              <dt>Definition list</dt>
              <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.</dd>
              <dt>Lorem ipsum dolor sit amet</dt>
              <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.</dd>
            </dl>

            <p>Nam rhoncus nunc eget nisi mattis, id auctor diam hendrerit. Nulla eget imperdiet ante, quis imperdiet odio. Donec faucibus lorem sodales justo accumsan, id imperdiet quam placerat. Curabitur sed bibendum dui. Donec condimentum diam diam. Proin facilisis viverra libero sed dictum. Maecenas fermentum a velit id euismod. Vivamus in eros nec lacus malesuada sagittis nec at eros. Etiam nibh elit, semper sed vulputate eu, posuere vitae nibh. Praesent in vehicula est, id tristique risus. Aliquam erat volutpat. Nulla a erat neque.</p>
            <p>Nam rhoncus nunc eget nisi mattis, id auctor diam hendrerit. Nulla eget imperdiet ante, quis imperdiet odio. Donec faucibus lorem sodales justo accumsan, id imperdiet quam placerat. Curabitur sed bibendum dui. Donec condimentum diam diam. Proin facilisis viverra libero sed dictum. Maecenas fermentum a velit id euismod. Vivamus in eros nec lacus malesuada sagittis nec at eros. Etiam nibh elit, semper sed vulputate eu, posuere vitae nibh. Praesent in vehicula est, id tristique risus. Aliquam erat volutpat. Nulla a erat neque.</p>
            <p>Nam rhoncus nunc eget nisi mattis, id auctor diam hendrerit. Nulla eget imperdiet ante, quis imperdiet odio. Donec faucibus lorem sodales justo accumsan, id imperdiet quam placerat. Curabitur sed bibendum dui. Donec condimentum diam diam. Proin facilisis viverra libero sed dictum. Maecenas fermentum a velit id euismod. Vivamus in eros nec lacus malesuada sagittis nec at eros. Etiam nibh elit, semper sed vulputate eu, posuere vitae nibh. Praesent in vehicula est, id tristique risus. Aliquam erat volutpat. Nulla a erat neque.</p>
          </section>

          <section>
            <h2>Form</h2>
            <form>
              <input type="text" placeholder="text input" />
              <input type="text" placeholder="text input" />
              <input type="text" placeholder="text input" />
              <button type="submit">button</button>
              <button type="submit">button</button>
            </form>

            <form action="#" method="post">
                <div>
                     <label for="name">Text Input:</label>
                     <input type="text" name="name" id="name" value="" tabindex="1" />
                </div>

                <div>
                     <h4>Radio Button Choice</h4>

                     <label for="radio-choice-1">Choice 1</label>
                     <input type="radio" name="radio-choice-1" id="radio-choice-1" tabindex="2" value="choice-1" />

                 <label for="radio-choice-2">Choice 2</label>
                     <input type="radio" name="radio-choice-2" id="radio-choice-2" tabindex="3" value="choice-2" />
                </div>

              <div>
                <label for="select-choice">Select Dropdown Choice:</label>
                <select name="select-choice" id="select-choice">
                  <option value="Choice 1">Choice 1</option>
                  <option value="Choice 2">Choice 2</option>
                  <option value="Choice 3">Choice 3</option>
                </select>
              </div>

              <div>
                <label for="textarea">Textarea:</label>
                <textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>
              </div>

              <div>
                  <label for="checkbox">Checkbox:</label>
                <input type="checkbox" name="checkbox" id="checkbox" />
                </div>

              <div>
                  <input type="submit" value="Submit" />
                </div>
            </form>
          </section>

          <section>
            <h2>Tables</h2>
            <table>
              <tr>
                <th>Email</th>
                <td>user.email</td>
              </tr>
              <tr>
                <th>First name</th>
                <td>user.firstName</td>
              </tr>
              <tr>
                <th>Last name</th>
                <td>user.lastName</td>
              </tr>
              <tr>
                <th>Skype ID</th>
                <td>user.skypeId</td>
              </tr>
              <tr>
                <th>X-Team Slack ID</th>
                <td>user.slackId</td>
              </tr>
              <tr>
                <th>Website</th>
                <td>user.website</td>
              </tr>
              <tr>
                <th>Nationality</th>
                <td>user.nationality</td>
              </tr>
              <tr>
                <th>About me</th>
                <td>user.aboutMe</td>
              </tr>
            </table>

            <table>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>users[id].email</td>
                  <td>users[id].firstName users[id].lastName</td>
                  <td><a>View</a></td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2>Media</h2>

            <img className="center" src="http://placehold.it/100x100" />

            <img src="http://placehold.it/150x150" />

            <img src="http://placehold.it/350x150" />

            <img src="http://placehold.it/550x150" />


            <audio src="/music/good_enough.mp3" controls>
              <p>Fallback content goes here.</p>
            </audio>
          </section>
        </article>
      </div>
    );
  }
}

export default HomePage;
