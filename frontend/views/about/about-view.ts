import { Binder, field } from 'Frontend/../target/flow-frontend/form';
import PersonModel from 'Frontend/generated/com/example/application/PersonModel';
import { customElement, html, PropertyValues } from 'lit-element';
import { View } from '../../views/view';
import '@vaadin/vaadin-text-field';
import { PersonEndpoint } from 'Frontend/generated/PersonEndpoint';
import Person from 'Frontend/generated/com/example/application/Person';

@customElement('about-view')
export class AboutView extends View {
  private binder = new Binder(this, PersonModel);
  render() {
    return html`
      <vaadin-text-field ...="${field(this.binder.model.firstName)}" label="First Name:"></vaadin-text-field>
      <vaadin-text-field ...="${field(this.binder.model.lastName)}" label="Last Name:"></vaadin-text-field>
      `;
  }

  protected async firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    this.binder.read(<Person>await PersonEndpoint.getPerson());
    console.log(this.binder.value);
  }
  async connectedCallback() {
    super.connectedCallback();
    this.classList.add(
      'flex',
      'flex-col',
      'h-full',
      'items-center',
      'justify-center',
      'p-l',
      'text-center',
      'box-border'
    );
  }
}
