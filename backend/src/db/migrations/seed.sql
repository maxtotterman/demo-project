INSERT INTO "public"."companies" ("id", "name", "logo_url", "created_at", "modified_at") VALUES
('8ca917fb-e9f3-4c9e-bb55-8f81bcfade8f', 'Max Tötterman AB', NULL, '2025-06-12 09:52:12.592718+00', '2025-06-12 09:52:12.592718+00'),
('ce76d37d-a080-47e3-a858-630a8cf767ee', 'Hasses Måleri AB', NULL, '2025-05-19 09:52:12.592718+00', '2025-06-12 09:52:12.592718+00');

INSERT INTO "public"."users" ("id", "company_id", "first_name", "last_name", "status", "created_at", "modified_at", "deleted_at") VALUES
('5853c7e0-e02d-4216-b093-cc2bf66299ca', '8ca917fb-e9f3-4c9e-bb55-8f81bcfade8f', 'Max', 'Tötterman', 'active', '2025-06-12 09:52:43.265661+00', '2025-06-12 09:52:43.265661+00', '2025-06-12 09:52:43.265661+00');

INSERT INTO "public"."cards" ("id", "company_id", "user_id", "card_number", "img_url", "total_spend_limit", "total_spent", "is_active", "activated_at", "expires_at", "created_at", "modified_at") VALUES
('dacd7bc7-71bd-497c-904a-d07a815e4e58', '8ca917fb-e9f3-4c9e-bb55-8f81bcfade8f', '5853c7e0-e02d-4216-b093-cc2bf66299ca', '12345679', 'https://e7.pngegg.com/pngimages/318/114/png-clipart-debit-card-stored-value-card-prepayment-for-service-payment-card-credit-card-black-business-card-design-label-payment.png', 10000.00, 500.00, 't', '2025-06-12 09:53:43.626927+00', '2029-06-12 09:53:48.300086+00', '2025-06-12 09:53:37.263868+00', '2025-06-16 19:52:22.933+00');

INSERT INTO "public"."transactions" ("id", "card_id", "user_id", "description", "amount", "transaction_date", "reference_number") VALUES
('18f45f18-a8ca-49d4-b1be-619d07736ad0', 'dacd7bc7-71bd-497c-904a-d07a815e4e58', '5853c7e0-e02d-4216-b093-cc2bf66299ca', 'Gas station', 63.75, '2025-06-07 10:00:00+00', 'REF-903245'),
('2de24de2-c2b4-47fd-b824-07e021e2637b', 'dacd7bc7-71bd-497c-904a-d07a815e4e58', '5853c7e0-e02d-4216-b093-cc2bf66299ca', 'Movie tickets', 27.00, '2025-06-04 19:30:00+00', 'REF-336122'),
('3f49dfbc-f39a-44d1-9b09-f91228aede7f', 'dacd7bc7-71bd-497c-904a-d07a815e4e58', '5853c7e0-e02d-4216-b093-cc2bf66299ca', 'Pharmacy', 29.50, '2025-06-06 12:34:00+00', 'REF-774832'),
('4c331956-62ef-4fba-95f4-a7739a01cd7a', 'dacd7bc7-71bd-497c-904a-d07a815e4e58', '5853c7e0-e02d-4216-b093-cc2bf66299ca', 'Clothing store', 154.99, '2025-06-03 16:10:00+00', 'REF-622991'),
('67a603e7-aa0c-4c4e-b8b5-663c28561eaa', 'dacd7bc7-71bd-497c-904a-d07a815e4e58', '5853c7e0-e02d-4216-b093-cc2bf66299ca', 'Online subscription', 12.99, '2025-06-09 17:45:00+00', 'REF-158302'),
('7e6c2ff7-4697-412a-b1b9-b14cd498ddbe', 'dacd7bc7-71bd-497c-904a-d07a815e4e58', '5853c7e0-e02d-4216-b093-cc2bf66299ca', 'Restaurant dinner', 89.00, '2025-06-05 20:15:00+00', 'REF-220193'),
('9c1b431c-6e04-440c-846a-8149ebaa0d95', 'dacd7bc7-71bd-497c-904a-d07a815e4e58', '5853c7e0-e02d-4216-b093-cc2bf66299ca', 'Taxi ride', 34.40, '2025-06-05 22:05:00+00', 'REF-118322'),
('e435b705-9e2e-4f08-9f3d-ea22f8c279ca', 'dacd7bc7-71bd-497c-904a-d07a815e4e58', '5853c7e0-e02d-4216-b093-cc2bf66299ca', 'Supermarket', 128.30, '2025-06-08 14:12:00+00', 'REF-527384'),
('eaaef595-d7d2-4d09-9412-5f28bc0bd0b1', 'dacd7bc7-71bd-497c-904a-d07a815e4e58', '5853c7e0-e02d-4216-b093-cc2bf66299ca', 'Bookstore', 48.75, '2025-06-02 11:20:00+00', 'REF-470293'),
('fcfe6ba1-d585-4c54-8bf0-f179d19b47b2', 'dacd7bc7-71bd-497c-904a-d07a815e4e58', '5853c7e0-e02d-4216-b093-cc2bf66299ca', 'Coffee shop purchase', 45.20, '2025-06-10 08:23:00+00', 'REF-839201');

