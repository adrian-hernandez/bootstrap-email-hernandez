const emails = {
    inbox: [
        `<div class="email-item row">
            <div class="col-xs-12 col-sm-4 col-lg-1 sender"><p><strong>John Doe</strong></p></div>
            <div class="col-xs-12 col-sm-6 col-lg-9">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-lg-2 subject"><p>Project Update</p></div>
                    <div class="col-xs-12 col-sm-12 col-lg-7 message"><p>The project is on track and will be delivered on time.</p></div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-1 col-lg-1 date"><p>10:45 AM</p></div>
            <button class="col-xs-12 col-sm-1 col-lg-1 btn btn-outline-success reply" type="button">Reply</button>
        </div>`,
        `<div class="email-item row">
            <div class="col-xs-12 col-sm-4 col-lg-1 sender"><p><strong>Susan Smith</strong></p></div>
            <div class="col-xs-12 col-sm-6 col-lg-9">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-lg-2 subject"><p>Team Lunch</p></div>
                    <div class="col-xs-12 col-sm-12 col-lg-7 message"><p>Don't forget the team lunch at 1 PM today!</p></div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-1 col-lg-1 date"><p>9:30 AM</p></div>
            <button class="col-xs-12 col-sm-1 col-lg-1 btn btn-outline-success reply" type="button">Reply</button>
        </div>`,
        `<div class="email-item row">
            <div class="col-xs-12 col-sm-4 col-lg-1 sender"><p><strong>HR Dept</strong></p></div>
            <div class="col-xs-12 col-sm-6 col-lg-9">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-lg-2 subject"><p>Policy Update</p></div>
                    <div class="col-xs-12 col-sm-12 col-lg-7 message"><p>Please review the updated company policies.</p></div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-1 col-lg-1 date"><p>8:15 AM</p></div>
            <button class="col-xs-12 col-sm-1 col-lg-1 btn btn-outline-success reply" type="button">Reply</button>
        </div>`,
    ],
    
    sent: [
        `<div class="email-item row">
            <div class="col-xs-12 col-sm-4 col-lg-1 sender"><p><strong>Jane Smith</strong></p></div>
            <div class="col-xs-12 col-sm-6 col-lg-9">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-lg-2 subject"><p>Meeting Follow-up</p></div>
                    <div class="col-xs-12 col-sm-12 col-lg-7 message"><p>I wanted to touch base on our last meeting.</p></div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-1 col-lg-1 date"><p>11:15 AM</p></div>
            <button class="col-xs-12 col-sm-1 col-lg-1 btn btn-outline-success reply" type="button">Reply</button>
        </div>`,
        `<div class="email-item row">
            <div class="col-xs-12 col-sm-4 col-lg-1 sender"><p><strong>Tom Hanks</strong></p></div>
            <div class="col-xs-12 col-sm-6 col-lg-9">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-lg-2 subject"><p>Document Submission</p></div>
                    <div class="col-xs-12 col-sm-12 col-lg-7 message"><p>Attached is the final draft of the document.</p></div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-1 col-lg-1 date"><p>3:00 PM</p></div>
            <button class="col-xs-12 col-sm-1 col-lg-1 btn btn-outline-success reply" type="button">Reply</button>
        </div>`,
        `<div class="email-item row">
            <div class="col-xs-12 col-sm-4 col-lg-1 sender"><p><strong>Mary Jane</strong></p></div>
            <div class="col-xs-12 col-sm-6 col-lg-9">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-lg-2 subject"><p>Feedback on Report</p></div>
                    <div class="col-xs-12 col-sm-12 col-lg-7 message"><p>Here are my comments on your report. Great work!</p></div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-1 col-lg-1 date"><p>12:30 PM</p></div>
            <button class="col-xs-12 col-sm-1 col-lg-1 btn btn-outline-success reply" type="button">Reply</button>
        </div>`,
    ],

    trash: [
        `<div class="email-item row">
            <div class="col-xs-12 col-sm-4 col-lg-1 sender"><p><strong>Michael Brown</strong></p></div>
            <div class="col-xs-12 col-sm-6 col-lg-9">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-lg-2 subject"><p>Invoice Reminder</p></div>
                    <div class="col-xs-12 col-sm-12 col-lg-7 message"><p>Your invoice is still pending.</p></div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-1 col-lg-1 date"><p>12:00 PM</p></div>
            <button class="col-xs-12 col-sm-1 col-lg-1 btn btn-outline-success reply" type="button">Reply</button>
        </div>`,
        `<div class="email-item row">
            <div class="col-xs-12 col-sm-4 col-lg-1 sender"><p><strong>David White</strong></p></div>
            <div class="col-xs-12 col-sm-6 col-lg-9">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-lg-2 subject"><p>Subscription Expired</p></div>
                    <div class="col-xs-12 col-sm-12 col-lg-7 message"><p>Your subscription has expired. Please renew it to continue service.</p></div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-1 col-lg-1 date"><p>9:45 AM</p></div>
            <button class="col-xs-12 col-sm-1 col-lg-1 btn btn-outline-success reply" type="button">Reply</button>
        </div>`,
        `<div class="email-item row">
            <div class="col-xs-12 col-sm-4 col-lg-1 sender"><p><strong>Support Team</strong></p></div>
            <div class="col-xs-12 col-sm-6 col-lg-9">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-lg-2 subject"><p>Ticket Resolved</p></div>
                    <div class="col-xs-12 col-sm-12 col-lg-7 message"><p>Your support ticket has been resolved. Please check your inbox for details.</p></div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-1 col-lg-1 date"><p>5:00 PM</p></div>
            <button class="col-xs-12 col-sm-1 col-lg-1 btn btn-outline-success reply" type="button">Reply</button>
        </div>`,
    ],

    starred: [
        `<div class="email-item row">
            <div class="col-xs-12 col-sm-4 col-lg-1 sender"><p><strong>Chris Green</strong></p></div>
            <div class="col-xs-12 col-sm-6 col-lg-9">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-lg-2 subject"><p>Starred Email</p></div>
                    <div class="col-xs-12 col-sm-12 col-lg-7 message"><p>This is a starred email.</p></div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-1 col-lg-1 date"><p>2:30 PM</p></div>
            <button class="col-xs-12 col-sm-1 col-lg-1 btn btn-outline-success reply" type="button">Reply</button>
        </div>`,
        `<div class="email-item row">
            <div class="col-xs-12 col-sm-4 col-lg-1 sender"><p><strong>Anna Lee</strong></p></div>
            <div class="col-xs-12 col-sm-6 col-lg-9">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-lg-2 subject"><p>Important Contract</p></div>
                    <div class="col-xs-12 col-sm-12 col-lg-7 message"><p>Please review the attached contract and let me know if you have any questions.</p></div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-1 col-lg-1 date"><p>10:00 AM</p></div>
            <button class="col-xs-12 col-sm-1 col-lg-1 btn btn-outline-success reply" type="button">Reply</button>
        </div>`
    ]
}