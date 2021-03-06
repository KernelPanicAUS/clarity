import {Component} from "@angular/core";

@Component({
    selector: "clr-responsive-nav-header-sidenav-demo",
    template: `
    <pre>
    <code clr-code-highlight="language-html" ngNonBindable>
    &lt;clr-main-container&gt;
        &lt;clr-header&gt;
            ...
            &lt;div class=&quot;header-nav&quot; [clr-nav-level]=&quot;1&quot;&gt;
                ...
            &lt;/div&gt;
            ...
        &lt;/clr-header&gt;
        &lt;div class=&quot;content-container&quot;&gt;
            &lt;main class=&quot;content-area&quot;&gt;
                ...
            &lt;/main&gt;
            &lt;nav class=&quot;sidenav&quot; [clr-nav-level]=&quot;2&quot;&gt;
                ...
            &lt;/nav&gt;
        &lt;/div&gt;
    &lt;/clr-main-container&gt;
    </code>
    </pre>
    `,
    styleUrls: ["./headers.demo.css"]
})
export class ResponsiveNav1Demo {
}
