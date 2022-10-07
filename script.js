$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            // valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            full_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply your full name'
                    }
                }
            },
             password: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your Password'
                    }
                }
            },
            confirm_pass: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your Confirm Password'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                   
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'Bangladesh',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please supply your street address'
                    }
                }
            },
            facebook: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please paste your Facebook Profile Link'
                    }
                }
            },
            batch: {
                validators: {
                    notEmpty: {
                        message: 'Please select your Batch'
                    }
                }
            },
            country: {
                validators: {
                    notEmpty: {
                        message: 'Please select your Country'
                    }
                }
            },
            // division: {
            //     validators: {
            //         notEmpty: {
            //             message: 'Please select your Division'
            //         }
            //     }
            // },
            // district: {
            //     validators: {
            //         notEmpty: {
            //             message: 'Please select your District'
            //         }
            //     }
            // },
            // thana: {
            //     validators: {
            //         notEmpty: {
            //             message: 'Please select your Thana'
            //         }
            //     }
            // },
            occupation: {
                validators: {
                    notEmpty: {
                        message: 'Please select your Occupation'
                    }
                }
            },
        }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});